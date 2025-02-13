import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const naviage = useNavigate();
  return (
    <div>
      <h2>Error: {message}</h2>
      <p>Something went wrong. Please try again later.</p>
      <button onClick={() => naviage('/')}>Return</button>
    </div>
  );
};

export default Error;
