import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [choice, setChoice] = useState("isPrime");
  const [result, setResult] = useState("");

  useEffect(() => {
    function calculate() {
      if (input !== "" && choice !== "") {
        if (choice === "isFibonacci") {
          return isFibonacci(input);
        } else if (choice === "isPrime") {
          return isPrime(input);
        } else {
          return "false";
        }
      } else {
        return "false";
      }
    }
    function isFibonacci(number) {
      if (
        isSquare(5 * (number * number) - 4) ||
        isSquare(5 * (number * number) + 4)
      ) {
        return true;
      } else {
        return false;
      }
    }

    function isPrime(number) {
      for (let i = 2; i < number; i++) if (number % i === 0) return false;
      return number > 1;
    }

    function isSquare(number) {
      return number > 0 && Math.sqrt(number) % 1 === 0;
    }

    const result = calculate();
    setResult(`${result}`);
  }, [choice, input]);

  const conditionNumber = (number) => {
    console.log(number);
    if (number < 0) {
      setInput(1);
    } else {
      setInput(number);
    }
    if (number % 1 !== 0) {
      setInput(Math.round(number));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <input
            type="number"
            onChange={(e) => conditionNumber(e.target.value)}
            value={input}
          />
        </div>
        <div className="center">
          <select id="selectBox" onChange={(e) => setChoice(e.target.value)}>
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div id="result" className="right">
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
