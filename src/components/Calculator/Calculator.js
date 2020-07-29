import React, { useState, useEffect } from 'react';

import CalcDisplay from './CalcDisplay';
import CalcButton from './CalcButton';
import { btnCodes } from '../../utils/calc-btncodes';
import './Calculator.css';

const opers = ['+', '-', '*', '/'];

const Calculator = () => {
  const [calc, setCalc] = useState(['0']);
  const [calcHist, setCalcHist] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInput = e => {
    const input = e.target.value;
    const num = e.target.classList.contains('num');
    const oper = e.target.classList.contains('oper');
    const lastDigit = calc.slice(-1)[0];

    // toggle active class when clicked
    toggleActiveBtn(e.target.id);

    if (input === '0') {
      if (calc.length === 1 && calc[0] !== '0') {
        setCalc([...calc, input]);
      } else if (calc.length > 1) {
        setCalc([...calc, input]);
      }
    }

    // if a number is clicked (except 0)
    if (num && input !== '0') {
      if (calc.length === 1 && calc[0] === '0') {
        setCalc([...calc.slice(0, calc.length - 1), input]);
      } else {
        setCalc([...calc, input]);
      }
    }

    if (input === '.') {
      const regex = /(\d+\.\d+$)|\d+\.$/;
      const hasPoint = regex.test(calc.join(''));
      // if last operand doesn't have a point, add input
      if (!hasPoint) {
        setCalc([...calc, input]);
      }
    }

    // if an operation is clicked
    if (oper) {
      const lastDigitIsOper = opers.indexOf(lastDigit) > -1;
      // if last digit isn't an operator, append operator to end
      if (!lastDigitIsOper) {
        setCalc([...calc, input]);
      } else if (input !== lastDigit) {
        // if minus is entered and last digit is not minus, append minus
        if (input === '-' && lastDigit !== '-') {
          setCalc([...calc, input]);
        } else {
          const penultDigit = calc.slice(-2)[0];
          const penultDigitIsOper = opers.indexOf(penultDigit) > -1;
          // edge case when there is an oper followed by minus and new oper is entered
          // replace previous two opers with new input
          if (penultDigitIsOper) {
            setCalc([...calc.slice(0, calc.length - 2), input]);
          } else {
            setCalc([...calc.slice(0, calc.length - 1), input]);
          }
        }
      }
    }

    if (input === '=') {
      setCalcHist(`${calc.join('')} =`);
      evaluate();
    }

    if (input === 'CE') {
      if (calc.length > 1) {
        setCalc(calc.slice(0, calc.length - 1));
      } else if (calc.length === 1) {
        setCalc(['0']);
      }
    }

    if (input === 'AC') {
      setCalc(['0']);
      setCalcHist('');
    }
  };

  const handleKeyDown = e => {
    btnCodes.forEach(btnCode => {
      if (e.keyCode === btnCode.keyCode) {
        document.getElementById(btnCode.name).click();
      }
    });
  };

  const toggleActiveBtn = elId => {
    document.getElementById(elId).classList.add('active');
    setTimeout(() => {
      document.getElementById(elId).classList.remove('active');
    }, 200);
  };

  const evaluate = () => {
    const error = catchErrors();
    if (error) {
      setCalc(['0']);
    } else {
      // Sanitize before using eval - removes everything that isnt a digit, decimal or operators
      const sanitized = calc.join('').replace(/[^-()\d/*+.]/g, ''); //eslint-disable-next-line
      const calcResult = eval(sanitized);
      if (calcResult) {
        setCalc(calcResult.toString().split(''));
      } else {
        setCalc(['0']);
        setCalcHist('');
      }
    }
  };

  const catchErrors = () => {
    try {
      // Sanitize before using eval
      const sanitized = calc.join('').replace(/[^-()\d/*+.]/g, ''); //eslint-disable-next-line
      eval(sanitized);
    } catch (err) {
      console.log(err);
      return err instanceof SyntaxError || TypeError;
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">JavaScript Calculator</h1>
      <div className="calculator">
        <CalcDisplay calcHist={calcHist} calc={calc} />
        <div className="calc-buttons">
          {btnCodes.map(btnCode => (
            <CalcButton
              value={btnCode.value}
              btnId={btnCode.name}
              type={btnCode.type}
              key={btnCode.name}
              handleClick={handleInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
