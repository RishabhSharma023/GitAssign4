import React, { useState } from 'react';
import './HeronsFormula.css';

const HeronsFormula = () => {
  const [side1, setSide1] = useState('');
  const [side2, setSide2] = useState('');
  const [side3, setSide3] = useState('');
  const [result, setResult] = useState('');

  const heronsFormula = (a, b, c) => {
    return Math.sqrt((4 * a * a * b * b) - Math.pow(a * a + b * b - c * c, 2)) / 4;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const a = parseFloat(side1);
    const b = parseFloat(side2);
    const c = parseFloat(side3);

    if (a <= 0 || b <= 0 || c <= 0) {
      alert('All sides must be positive.');
      return;
    }

    setResult(heronsFormula(a, b, c).toFixed(2));
  };

  return (
    <div className="herons-formula">
      <h2>Herons Formula</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="side1-heron">Side 1:</label>
        <input
          type="number"
          id="side1-heron"
          value={side1}
          onChange={(e) => setSide1(e.target.value)}
          step="0.001"
          required
        />
        <br />
        <label htmlFor="side2-heron">Side 2:</label>
        <input
          type="number"
          id="side2-heron"
          value={side2}
          onChange={(e) => setSide2(e.target.value)}
          step="0.001"
          required
        />
        <br />
        <label htmlFor="side3-heron">Side 3:</label>
        <input
          type="number"
          id="side3-heron"
          value={side3}
          onChange={(e) => setSide3(e.target.value)}
          step="0.001"
          required
        />
        <br />
        <input type="submit" value="Calculate" />
        <br />
        <label>Area:</label>
        <input type="text" value={result} readOnly />
      </form>
    </div>
  );
};

export default HeronsFormula;