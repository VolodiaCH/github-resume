import React, { useState } from 'react';
import { Repo } from '../utils';

const RepoList: React.FC<{ repos: Repo[] }> = ({ repos }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <div className="repo-list">
      <h2>Repositories</h2>
      <ul>
        {repos.slice(0, visibleCount).map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      {visibleCount < repos.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default RepoList;
