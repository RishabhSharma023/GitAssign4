import { useState } from 'react'
import './PolyFunc.css'

const PolynomialFunction = () => {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xvalue, setXvalue] = useState('');
    const [result, setResult] = useState('');
    const [evalResult, setEvalResult] = useState('');

    const polynomialEvaluation = (coefficients, exponents, xvalue) => {
        let result = 0;

        for (let i = 0; i < coefficients.length; i++) {
            result += parseFloat(coefficients[i]) * Math.pow(xvalue, parseFloat(exponents[i]));
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
        setResult(polynomialFunction(coeffArray, expArray));
        setEvalResult(polynomialEvaluation(coeffArray, expArray, parseFloat(xvalue)));
    };

    return (
        <form id="polynomial" onSubmit={handleSubmit}>
            <input type="text" id="coefficients" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} placeholder="Coefficients" />
            <input type="text" id="exponents" value={exponents} onChange={(e) => setExponents(e.target.value)} placeholder="Exponents" />
            <input type="number" id="x-value" value={xvalue} onChange={(e) => setXvalue(e.target.value)} placeholder="X Value" />
            <input type="submit" value="Calculate" />
            <input type="text" id="resultPolynomial" value={result} readOnly />
            <input type="text" id="resultPolynomialEval" value={evalResult} readOnly />
        </form>
    );
};

export default PolynomialFunction;