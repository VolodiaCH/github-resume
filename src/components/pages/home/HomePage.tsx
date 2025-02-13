import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value.trim();
    navigate(`/${username}`);
  };

  return (
    <div>
      <h1>Generate GitHub resume</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="Enter your GitHub username..."
          type="text"
          ref={usernameRef}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default HomePage;
