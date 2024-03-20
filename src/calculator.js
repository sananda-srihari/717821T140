import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = (operation) => {
    setTimeout(() => {
      let calculatedResult;
      if (operation === 'p') {
        calculatedResult = prime(parseInt(input));
      } else if (operation === 'f') {
        calculatedResult = fibonacci(parseInt(input));
      }
      else if (operation === 'e') {
        calculatedResult = even(parseInt(input));
      }
      else if (operation === 'avg') {
        calculatedResult = even(parseInt(input));
      }
      setResult(calculatedResult);
    }, 1000);
  };
  const prime = (num) => {
    const primes = [];
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
        console.log(i+",");
      }
    }
    return primes.join(', ');
  };
  const fibonacci = (count) => {
    let a = 0, b = 1, temp;
    const sequence = [];
    for (let i = 0; i < count; i++) {
      sequence.push(a);
      temp = a + b;
      a = b;
      b = temp;
    }
    return sequence.join(', ');
  };

  const even = (num) => {
    if (num <= 1) return 0;
    const sequence = [];
    for (let i = 1; i <= num; i++) {
        if(i % 2 === 0)
        {
            sequence.push(i);
        }
    }
    return sequence.join(', ');
  };

  const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0; 
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };

  const numbers = [10, 20, 30, 40, 50];
  const avg = calculateAverage(numbers);
  console.log('Average:', avg); 
  
  return (
    <div>
      <input type="text" value={input} readOnly />
      <br></br>
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleCalculate('p')}>Calculate Prime (p)</button>
      <button onClick={() => handleCalculate('f')}>Calculate Fibonacci (f)</button>
      <button onClick={() => handleCalculate('e')}>Calculate even (e)</button>
      <button onClick={() => handleCalculate('avg')}>Calculate even (avg)</button>
      <button onClick={handleClear}>C</button>
      <div><br></br>Result: {result}</div>
    </div>
  );
};

export default Calculator;
