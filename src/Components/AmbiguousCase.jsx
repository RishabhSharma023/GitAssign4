import { useState } from 'react'
import React, { useState } from 'react';

const AmbiguousCase = () => {
    const [sAambig, setSAambig] = useState('');
    const [sBambig, setSBambig] = useState('');
    const [a, setA] = useState('');
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
        const sA = parseFloat(sAambig);
        const sB = parseFloat(sBambig);
        const aA = parseFloat(a);
        const result = ambiguousCase(sA, sB, aA);
        setResult(result);
    }

    return (
        <div class="form-container">
            <h2>Ambiguous Case</h2>
            <label for="sideA-ambiguous">Angle A:</label>
            <input type="text" id="angle-ambiguous" value={aA} onChange={(e) => setAngle(e.target.value)} />
            <label for="sideA-ambiguous">Side A:</label>
            <input type="text" id="sideA-ambiguous" value={sAambig} onChange={(e) => setA(e.target.value)} />
            <label for="sideB-ambiguous">Side b:</label>
            <input type="text" id="sideB-ambiguous" value={b} onChange={(e) => setB(e.target.value)} />
            <label for="resultAmbiguous">Triangle Type (Result):</label>
            <input type="text" id="resultAmbiguous" value={result} disabled />
            <button id="submit" onClick={handleAmbiguous}>Calculate</button>
        </div>
    );
}

export default AmbiguousCase;