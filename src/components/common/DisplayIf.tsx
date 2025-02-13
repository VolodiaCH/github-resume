import React from 'react';

interface DisplayIfProps {
  isTrue: boolean;
  children: React.ReactNode;
}

const DisplayIf: React.FC<DisplayIfProps> = ({ isTrue, children }) => {
  if (isTrue) {
    return <>{children}</>;
  }

  return null;
};

export default DisplayIf;
