import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import React from 'react';
import HeronsFormula from './HeronsFormula';
import AmbiguousCase from './AmbiguousCase';
import NewtonsMethod from './NewtonsMethod';
import PolynomialFunction from './PolynomialFunction';

const App = () => {
    return (
        <div>
            <h1>Heron's Formula</h1>
            <HeronsFormula />
            <h1>Ambiguous Case</h1>
            <AmbiguousCase />
            <h1>Newton's Method</h1>
            <NewtonsMethod />
            <h1>Polynomial Function</h1>
            <PolynomialFunction />
        </div>
    );
};

export default App;