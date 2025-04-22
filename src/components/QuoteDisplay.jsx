import React from 'react';

const QuoteDisplay = ({ quote }) => {
  return (
    <div className="quote-box">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
};

export default QuoteDisplay;