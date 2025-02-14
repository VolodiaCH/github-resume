import React, { useState } from 'react';
import DisplayIf from '../../../common/DisplayIf.tsx';
import { Repo, REPOS_BY_DEFAULT } from '../utils.ts';

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const [visibleCount, setVisibleCount] = useState(REPOS_BY_DEFAULT);
  const loadMore = () => setVisibleCount((prev) => prev + REPOS_BY_DEFAULT);

  const reposToDisplay = repos.slice(0, visibleCount);

  const hasMoreRepos = visibleCount < repos.length;

  return (
    <div className="repo-list">
      <h2>Repositories</h2>

      <ul>
        {reposToDisplay.map((repo) => {
          const updatedDate = new Date(repo.updated_at).toLocaleDateString();
          return (
            <li key={repo.name} className="repo-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>

              <span className="updated-date">{updatedDate}</span>
            </li>
          );
        })}
      </ul>

      <DisplayIf isTrue={hasMoreRepos}>
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      </DisplayIf>
    </div>
  );
};

export default RepoList;
