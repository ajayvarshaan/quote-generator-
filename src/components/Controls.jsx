import React from 'react';

const Controls = ({ category, setCategory, handleNewQuote, handleCopy, copied }) => {
  return (
    <div className="controls">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Motivation">Motivation</option>
        <option value="Humor">Humor</option>
        <option value="Wisdom">Wisdom</option>
      </select>
      <button onClick={handleNewQuote}>New Quote</button>
      <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
    </div>
  );
};

export default Controls;