import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser, fetchUserRepos } from '../../../services/githubService.ts';
import Loading from '../../common/Loading.tsx';
import Error from '../../common/Error.tsx';
import NotFound from '../../common/NotFound.tsx';
import { Errors } from '../../../services/utils.ts';

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

        setUser(userData);
        setRepos(reposData);
      } catch (err: any) {
        console.error(err);

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

  console.log(user, repos);

  return (
    <div>
      <h1>{username}'s resume</h1>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default ResumePage;
