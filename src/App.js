import React, { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Result = styled.h2`
  margin-top: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #bdbdbd;
  }

  &.orange {
    background-color: #ff9800;
    color: #fff;

    &:hover {
      background-color: #f57c00;
    }
  }

  &.big {
    grid-column: span 2;
  }
`;

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      const evaluatedResult = eval(expression);
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div style={{ background: "#000", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "90%", width: "375px", background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}>
        <CalculatorWrapper>
          <Input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
          />
          <ButtonsWrapper>
            <Button className="orange" onClick={() => clearExpression()}>
              AC
            </Button>
            <Button onClick={() => handleButtonClick("+/-")}>+/-</Button>
            <Button onClick={() => handleButtonClick("%")}>%</Button>
            <Button className="orange" onClick={() => handleButtonClick("/")}>
              /
            </Button>
            <Button onClick={() => handleButtonClick("7")}>7</Button>
            <Button onClick={() => handleButtonClick("8")}>8</Button>
            <Button onClick={() => handleButtonClick("9")}>9</Button>
            <Button className="orange" onClick={() => handleButtonClick("*")}>
              *
            </Button>
            <Button onClick={() => handleButtonClick("4")}>4</Button>
            <Button onClick={() => handleButtonClick("5")}>5</Button>
            <Button onClick={() => handleButtonClick("6")}>6</Button>
            <Button className="orange" onClick={() => handleButtonClick("-")}>
              -
            </Button>
            <Button onClick={() => handleButtonClick("1")}>1</Button>
            <Button onClick={() => handleButtonClick("2")}>2</Button>
            <Button onClick={() => handleButtonClick("3")}>3</Button>
            <Button className="orange" onClick={() => handleButtonClick("+")}>
              +
            </Button>
            <Button className="big" onClick={() => handleButtonClick("0")}>
              0
            </Button>
            <Button onClick={() => handleButtonClick(".")}>.</Button>
            <Button className="orange" onClick={() => evaluateExpression()}>
              =
            </Button>
          </ButtonsWrapper>
        </CalculatorWrapper>
        <Result>Resultat: {result}</Result>
      </div>
    </div>
  );
}

export default App;
