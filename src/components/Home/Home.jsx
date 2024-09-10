import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Home.css";
import { evaluate } from "mathjs";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearDisplay = () => {
    setInput("");
    setResult("");
  };

  // const calculateResult = () => {
  //   try {
  //     const evaluatedResult = new Function("return " + input)();
  //     setResult(evaluatedResult);
  //     setHistory([...history, { expression: input, result: evaluatedResult }]);
  //   } catch (err) {
  //     setResult("Error");
  //   }
  // };

  const calculateResult = () => {
    try {
      const evaluatedResult = evaluate(input); // Safely evaluate the input
      setResult(evaluatedResult);
      setHistory([...history, { expression: input, result: evaluatedResult }]);
    } catch (err) {
      setResult("Error");
    }
  };

  const handleAdvancedOperation = (operation) => {
    switch (operation) {
      case "sqrt":
        setInput((prevInput) => `Math.sqrt(${prevInput})`);
        break;
      case "square":
        setInput((prevInput) => `(${prevInput})**2`);
        break;
      case "sin":
        setInput((prevInput) => `Math.sin(${prevInput})`);
        break;
      case "cos":
        setInput((prevInput) => `Math.cos(${prevInput})`);
        break;
      case "tan":
        setInput((prevInput) => `Math.tan(${prevInput})`);
        break;
      case "log":
        setInput((prevInput) => `Math.log10(${prevInput})`);
        break;
      case "ln":
        setInput((prevInput) => `Math.log(${prevInput})`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="home">
      <div className="calculator">
        <div className="display">
          <div className="history">
            {history.length === 0 ? (
              <p>No calculations yet</p>
            ) : (
              history.map((item, index) => (
                <p key={index}>
                  {item.expression} = {item.result}
                </p>
              ))
            )}
          </div>
          <div className="input">{input || "0"}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <Button
              variant="contained"
              onClick={() => handleClick("C")}
              style={{ backgroundColor: "red", color: "white" }}
            >
              C
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("log")}
            >
              log
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("ln")}
            >
              ln
            </Button>
            <Button variant="contained" onClick={() => handleClick("7")}>
              7
            </Button>
            <Button variant="contained" onClick={() => handleClick("8")}>
              8
            </Button>
            <Button variant="contained" onClick={() => handleClick("9")}>
              9
            </Button>
            <Button variant="contained" onClick={() => handleClick("/")}>
              /
            </Button>
          </div>
          <div className="row">
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("sqrt")}
            >
              √
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("square")}
            >
              x²
            </Button>
            <Button variant="contained" onClick={() => handleClick("%")}>
              %
            </Button>
            <Button variant="contained" onClick={() => handleClick("4")}>
              4
            </Button>
            <Button variant="contained" onClick={() => handleClick("5")}>
              5
            </Button>
            <Button variant="contained" onClick={() => handleClick("6")}>
              6
            </Button>
            <Button variant="contained" onClick={() => handleClick("*")}>
              *
            </Button>
          </div>
          <div className="row">
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("sin")}
            >
              sin
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("cos")}
            >
              cos
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAdvancedOperation("tan")}
            >
              tan
            </Button>
            <Button variant="contained" onClick={() => handleClick("1")}>
              1
            </Button>
            <Button variant="contained" onClick={() => handleClick("2")}>
              2
            </Button>
            <Button variant="contained" onClick={() => handleClick("3")}>
              3
            </Button>
            <Button variant="contained" onClick={() => handleClick("-")}>
              -
            </Button>
          </div>
          <div className="row">
            <Button variant="contained" onClick={() => handleClick("^")}>
              ^
            </Button>
            <Button variant="contained" onClick={() => handleClick("(")}>
              (
            </Button>
            <Button variant="contained" onClick={() => handleClick(")")}>
              )
            </Button>
            <Button variant="contained" onClick={() => handleClick("0")}>
              0
            </Button>
            <Button variant="contained" onClick={() => handleClick(".")}>
              .
            </Button>
            <Button variant="contained" onClick={() => handleClick("=")}>
              =
            </Button>
            <Button variant="contained" onClick={() => handleClick("+")}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
