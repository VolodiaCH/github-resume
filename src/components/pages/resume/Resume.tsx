import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  return (
    <div>
      <h1>{username}'s resume</h1>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default Home;
