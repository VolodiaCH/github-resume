import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser, fetchUserRepos } from '../../../services/githubService.ts';
import Loading from '../../common/Loading.tsx';
import Error from '../../common/Error.tsx';
import NotFound from '../../common/NotFound.tsx';
import Resume from './Resume.tsx';
import { Errors } from '../../../services/utils.ts';
import { getTime } from './utils.ts';

const ResumePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const loadData = async () => {
      setLoading(true);

      try {
        const [userData, reposData] = await Promise.all([
          fetchUser(username),
          fetchUserRepos(username),
        ]);

        reposData.sort((a, b) => getTime(b.updated_at) - getTime(a.updated_at));

        setUser(userData);
        setRepos(reposData);
      } catch (err: any) {
        if (err.message === Errors.NotFound) setUser(null);
        else setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [username]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!user) return <NotFound />;

  return <Resume user={user} repos={repos} navigate={navigate} />;
};

export default ResumePage;
