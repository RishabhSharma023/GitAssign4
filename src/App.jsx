import './App.css';
import HeronsFormula from './Components/HeronsFormula.jsx';
import AmbiguousCase from './Components/AmbiguousCase.jsx';
import NewtonsMethod from './Components/NewtonsMethod.jsx';
import PolynomialFunction from './Components/PolynomialFunction.jsx';

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>Calculator App</h1>
      </div>
      <div className="grid-container">
        <div className="herons-formula">
          <HeronsFormula />
        </div>
        <div className="ambiguous-case">
          <AmbiguousCase />
        </div>
        <div className="newtons-method">
          <NewtonsMethod />
        </div>
        <div className="polynomial-functions">
          <PolynomialFunction />
        </div>
      </div>
    </div>
  );
}

export default App;