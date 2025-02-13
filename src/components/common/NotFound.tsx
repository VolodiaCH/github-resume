import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User not found</h2>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default NotFound;
