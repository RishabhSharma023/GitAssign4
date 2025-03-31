import { useState } from 'react'
import './NewtonsMeth.css'

const NewtonsMethod = () => {
    const [g, setG] = useState('');
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
        setResult(newtonsMethod(g));
    };

    return (
        <form id="newton" onSubmit={handleSubmit}>
            <input type="number" id="root-guess" value={g} onChange={(e) => setG(e.target.value)} placeholder="Initial Guess" />
            <input type="submit" value="Calculate" />
            <input type="text" id="resultRoot" value={result} readOnly />
        </form>
    );
};

export default NewtonsMethod;