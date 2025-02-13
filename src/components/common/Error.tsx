import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/common.scss';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h2>Error</h2>
      <p className="error-message">{message}</p>
      <p>Something went wrong. Please try again later.</p>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default Error;
