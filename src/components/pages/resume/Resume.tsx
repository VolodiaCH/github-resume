import React from 'react';
import { ResumeProps } from './utils.ts';
import UserProfile from './common/UserProfile.tsx';
import LanguageChart from './common/LanguageChart.tsx';
import RepoList from './common/RepoList.tsx';
import DisplayIf from '../../common/DisplayIf.tsx';
import '../../../styles/resume.scss';

const Resume: React.FC<ResumeProps> = ({ user, repos, navigate }) => (
  <div className="resume-container">
    <UserProfile user={user} />
    <hr />

    <DisplayIf isTrue={repos.length !== 0}>
      <LanguageChart repos={repos} />
      <hr />

      <RepoList repos={repos} />
      <hr />
    </DisplayIf>

    <button className="return-btn" onClick={() => navigate('/')}>
      Return
    </button>
  </div>
);

export default Resume;
