import React from 'react';

interface VariesProps {
  title: string;
}

const Varies: React.FC<VariesProps> = ({ title }) => {
  return (
    <div className="variesContainer">
      <h2>{title}</h2>
    </div>
  );
};

export default Varies;
