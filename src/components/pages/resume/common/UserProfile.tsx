import React from 'react';
import DisplayIf from '../../../common/DisplayIf.tsx';
import { User } from '../utils.ts';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const hasAvatar = Boolean(user.avatar_url);
  const hasBlog = Boolean(user.blog);

  return (
    <div className="user-profile">
      <DisplayIf isTrue={hasAvatar}>
        <img src={user.avatar_url} alt={user.name} />
      </DisplayIf>

      <div className="user-info">
        <h1>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.name || user.login}
          </a>
        </h1>

        <DisplayIf isTrue={hasBlog}>
          <p>
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </p>
        </DisplayIf>

        <p>Public Repositories: {user.public_repos}</p>
        <p>Member Since: {user.created_at.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default UserProfile;
