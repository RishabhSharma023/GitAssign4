import React, { useState } from 'react';
import './PolynomialFunction.css';

const PolynomialFunction = () => {
  const [coefficients, setCoefficients] = useState('');
  const [exponents, setExponents] = useState('');
  const [xValue, setXValue] = useState('');
  const [resultPolynomial, setResultPolynomial] = useState('');
  const [resultPolynomialEval, setResultPolynomialEval] = useState('');

  const polynomialEvaluation = (coefficients, exponents, xValue) => {
    let result = 0;

    for (let i = 0; i < coefficients.length; i++) {
      result += parseFloat(coefficients[i]) * Math.pow(xValue, parseFloat(exponents[i]));
    }
    return result;
  };

  const polynomialFunction = (coefficients, exponents) => {
    let result = '';

    for (let i = 0; i < coefficients.length; i++) {
      if (i === 0) {
        result += coefficients[i] + 'x^' + exponents[i];
      } else if (coefficients[i] < 0) {
        result += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
      } else {
        result += ' + ' + coefficients[i] + 'x^' + exponents[i];
      }
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const coeffArray = coefficients.split(' ');
    const expArray = exponents.split(' ');
    const xVal = parseFloat(xValue);

    setResultPolynomial(polynomialFunction(coeffArray, expArray));
    setResultPolynomialEval(polynomialEvaluation(coeffArray, expArray, xVal));
  };

  return (
    <div className="polynomial-function">
      <h2>Polynomial Function</h2>
      <form id="polynomial" onSubmit={handleSubmit}>
        <label htmlFor="coefficients">Coefficients:</label>
        <input
          type="text"
          id="coefficients"
          value={coefficients}
          onChange={(e) => setCoefficients(e.target.value)}
          placeholder="Enter coefficients separated by spaces"
        />
        <label htmlFor="exponents">Exponents:</label>
        <input
          type="text"
          id="exponents"
          value={exponents}
          onChange={(e) => setExponents(e.target.value)}
          placeholder="Enter exponents separated by spaces"
        />
        <label htmlFor="x-value">X Value:</label>
        <input
          type="number"
          id="x-value"
          value={xValue}
          onChange={(e) => setXValue(e.target.value)}
          placeholder="Enter the value of x"
        />
        <input type="submit" value="Calculate" />
        <label htmlFor="resultPolynomial">Polynomial:</label>
        <input type="text" id="resultPolynomial" value={resultPolynomial} readOnly />
        <label htmlFor="resultPolynomialEval">Evaluation Result:</label>
        <input type="text" id="resultPolynomialEval" value={resultPolynomialEval} readOnly />
      </form>
    </div>
  );
};

export default PolynomialFunction;