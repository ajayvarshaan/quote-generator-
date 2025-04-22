import React, { useEffect, useState } from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import Controls from './components/Controls';
import ThemeToggle from './components/ThemeToggle';
import SurpriseToggle from './components/SurpriseToggle';
import quotesData from './data/quotes.json';
import './index.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState('All');
  const [copied, setCopied] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    setQuotes(quotesData);
    setQuote(getRandomQuote('All'));
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (surprise) {
      const interval = setInterval(() => {
        setQuote(getRandomQuote(category));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [surprise, category]);

  const getRandomQuote = (category) => {
    let filteredQuotes;
    if (category === 'All') {
      filteredQuotes = quotes; 
    } else {
      filteredQuotes = quotes.filter(quote => quote.category === category);
    }
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  };

  const handleNewQuote = () => {
    setQuote(getRandomQuote(category));
  };

  const handleCopy = () => {
    if (!quote) return;
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="app-container">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <SurpriseToggle surprise={surprise} setSurprise={setSurprise} />
      {quote && <QuoteDisplay quote={quote} />}
      <Controls
        category={category}
        setCategory={setCategory}
        handleNewQuote={handleNewQuote}
        handleCopy={handleCopy}
        copied={copied}
      />
    </div>
  );
};

export default App;