import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
    </div>
  );
};

export default ThemeToggle;
