import { useState } from 'react'
import './HeronsFormula.css'

const HeronsFormula = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [result, setResult] = useState('');

    const heronsFormula = (a, b, c) => {
        return Math.sqrt((4 * a * a * b * b) - Math.pow(a * a + b * b - c * c, 2)) / 4;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (a <= 0 || b <= 0 || c <= 0) {
            alert("All sides must be positive.");
            return;
        }
        setResult(heronsFormula(a, b, c).toFixed(2));
    };

    return (
        <form id="heron" onSubmit={handleSubmit}>
            <input type="number" id="side1-heron" value={a} onChange={(e) => setA(e.target.value)} placeholder="Side 1" />
            <input type="number" id="side2-heron" value={b} onChange={(e) => setB(e.target.value)} placeholder="Side 2" />
            <input type="number" id="side3-heron" value={c} onChange={(e) => setC(e.target.value)} placeholder="Side 3" />
            <input type="submit" value="Calculate" />
            <input type="text" id="resultHeron" value={result} readOnly />
        </form>
    );
};

export default HeronsFormula;