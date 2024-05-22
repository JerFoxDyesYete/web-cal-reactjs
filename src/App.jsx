import { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (input) => {
    setDisplayValue(displayValue + input);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('ERROR');
    }
  };

  return (
    <div className="container">
      <h1>SIMPLE CALCULATOR</h1>
      <div className="calculator">
        <input type="text" className="display" readOnly value={displayValue} />
        <div className="calkeys">
          <button onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button onClick={() => appendToDisplay('+')} className="operator">+</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => appendToDisplay('-')} className="operator">-</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={() => appendToDisplay('/')} className="operator">/</button>
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          <button onClick={() => appendToDisplay('*')} className="operator">*</button>
        </div>
        <div className="equal-btn">
          <button onClick={calculate} className="operator">CALCULATE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
