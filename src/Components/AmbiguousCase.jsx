import React, { useState } from 'react';
import './AmbiguousCase.css';

const AmbiguousCase = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [angle, setAngle] = useState('');
  const [result, setResult] = useState('');

  const ambiguousCase = (sAambig, sBambig, a) => {
    if (a === 90) {
      return 'Right triangle';
    }

    const height = Math.round(sBambig * Math.sin(a * (Math.PI / 180)));

    if (a < 90) {
      if (sAambig < height) {
        return 'No triangle';
      }
      if (sAambig === height) {
        return 'Right triangle (one solution)';
      }
      if (height < sAambig && sAambig < sBambig) {
        return 'Two triangles (ambiguous case)';
      }
      if (sAambig >= sBambig) {
        return 'One triangle';
      }
    } else if (a < 180) {
      if (sAambig <= sBambig) {
        return 'No triangle';
      } else {
        return 'One triangle (obtuse angle)';
      }
    }

    return 'No solution';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sAambig = parseFloat(sideA);
    const sBambig = parseFloat(sideB);
    const a = parseFloat(angle);

    setResult(ambiguousCase(sAambig, sBambig, a));
  };

  return (
    <div className="ambiguous-case">
      <h2>Ambiguous Case</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sideA-ambiguous">Side A:</label>
        <input
          type="number"
          id="sideA-ambiguous"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          required
        />
        <br />
        <label htmlFor="sideB-ambiguous">Side B:</label>
        <input
          type="number"
          id="sideB-ambiguous"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          required
        />
        <br />
        <label htmlFor="angle-ambiguous">Angle:</label>
        <input
          type="number"
          id="angle-ambiguous"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Calculate" />
        <br />
        <label>Triangle Type (Result): </label>
        <input type="text" value={result} readOnly />
      </form>
    </div>
  );
};

export default AmbiguousCase;