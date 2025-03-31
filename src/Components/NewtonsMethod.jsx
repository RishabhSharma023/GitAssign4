import React, { useState } from 'react';
import './NewtonsMethod.css';

const NewtonsMethod = () => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const newtonsMethod = (g) => {
    function f(x) {
      return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }

    function fPrime(x) {
      return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }

    let iterationsMax = 1000;
    let iteration = 0;

    while (Math.abs(f(g)) > 0.0001 && iteration < iterationsMax) {
      g = g - f(g) / fPrime(g);
      iteration++;
    }

    return g;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const g = parseFloat(guess);
    setResult(newtonsMethod(g));
  };

  return (
    <div className="newtons-method">
      <h2>Newtons Method</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="root-guess">Root Guess:</label>
        <input
          type="number"
          id="root-guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Calculate" />
        <br />
        <label>Root Approximation (Result): </label>
        <input type="text" value={result} readOnly />
      </form>
    </div>
  );
};

export default NewtonsMethod;