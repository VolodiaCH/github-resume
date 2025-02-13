import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/common.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h2>User Not Found</h2>
      <p>We couldn't find the user you were looking for.</p>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default NotFound;
