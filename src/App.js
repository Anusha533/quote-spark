import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  "🌟 Believe in yourself.",
  "🌈 Every day is a fresh start.",
  "💪 You are stronger than you think.",
  "😊 Spread positivity.",
  "🚀 Keep moving forward!"
];

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="App">
      <h1>✨ QuoteSpark By Anusha</h1>
      <p className="quote">{quote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default App;
