import React from 'react';
import { User } from '../utils';

const UserProfile: React.FC<{ user: User }> = ({ user }) => (
  <div>
    {user.avatar_url && <img src={user.avatar_url} alt={user.name} />}
    <div>
      <h1>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.name || user.login}
        </a>
      </h1>
      {user.blog && (
        <p>
          <a href={user.blog} target="_blank" rel="noopener noreferrer">
            {user.blog}
          </a>
        </p>
      )}
      <p>Public Repositories: {user.public_repos}</p>
      <p>Member Since: {user.created_at.slice(0, 10)}</p>
    </div>
  </div>
);

export default UserProfile;
