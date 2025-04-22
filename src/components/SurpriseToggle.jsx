import React from 'react';

const SurpriseToggle = ({ surprise, setSurprise }) => {
  return (
    <div className="surprise-toggle">
      <button
        className={surprise ? 'surprise-active' : ''}
        onClick={() => setSurprise(prev => !prev)}
      >
        🎲
      </button>
    </div>
  );
};

export default SurpriseToggle;