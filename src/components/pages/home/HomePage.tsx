import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/home.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove all spaces in the username
    const username = usernameRef.current?.value.replace(/\s+/g, '');
    if (username) navigate(`/${username}`);
  };

  return (
    <div className="home-container">
      <h1>GitHub Resume Generator</h1>
      <form onSubmit={handleSubmit} className="home-form">
        <input
          autoFocus
          placeholder="Enter a GitHub username..."
          type="text"
          ref={usernameRef}
        />
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
};

export default HomePage;
