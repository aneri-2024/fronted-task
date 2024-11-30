import React, { useState, useEffect } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import HamburgerMenu from "./HamburgerMenu";
import TabPanel from "./TabPanel";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    setHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("calcHistory", JSON.stringify(history));
  }, [history]);

  const handleKeyPress = (value) => {
    if (value === "C") {
      setDisplayValue("0");
    } else if (value === "CE") {
      setDisplayValue((prev) => {
        const operators = ["+", "-", "×", "÷", "%"];
        let lastOperatorIndex = -1;

        for (const operator of operators) {
          const index = prev.lastIndexOf(operator);
          if (index > lastOperatorIndex) lastOperatorIndex = index;
        }

        if (lastOperatorIndex !== -1) {
          return prev.slice(0, lastOperatorIndex + 1);
        } else {
          return "0";
        }
      });
    } else if (value === "=") {
      try {
        const sanitizedValue = displayValue
          .replace(/×/g, "*")
          .replace(/÷/g, "/");
        const result = eval(sanitizedValue).toString();

        setDisplayValue(result);
        if (sanitizedValue && result !== "Error") {
          setHistory((prevHistory) => {
            const newHistory = [...prevHistory, `${displayValue} = ${result}`];
            return newHistory;
          });
        }
      } catch {
        setDisplayValue("Error");
      }
    } else if (value === "⌫") {
      setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "MS") {
      setMemory((prev) => [...prev, displayValue]);
    } else if (value === "MR") {
      if (memory && memory.length > 0) {
        setMemory((prev) => [...prev, memory[memory.length - 1]]);
      } else {
        setMemory([]);
      }
    } else if (value === "M+") {
      setMemory((prev) => [
        ...prev,
        (
          parseFloat(displayValue) + parseFloat(prev[prev.length - 1] || 0)
        ).toString(),
      ]);
    } else if (value === "M-") {
      setMemory((prev) => [
        ...prev,
        (
          parseFloat(prev[prev.length - 1] || 0) - parseFloat(displayValue)
        ).toString(),
      ]);
    } else if (value === "MC") {
      setMemory([]);
    } else {
      setDisplayValue((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const clearData = () => {
    if (activeTab === "history") {
      setHistory([]);
      localStorage.removeItem("calcHistory");
    } else if (activeTab === "memory") {
      setMemory([]);
      localStorage.removeItem("calcHistory");
    }
  };

  return (
    <div className="calculator">
      <HamburgerMenu onClick={() => setShowHistory(!showHistory)} />
      <Display value={displayValue} />
      {showHistory ? (
        <div
          className={`history-panel ${
            showHistory ? "history-panel-enter-active" : "history-panel-enter"
          }`}
        >
          <TabPanel
            history={history}
            memory={memory}
            showHistory={showHistory}
            setShowHistory={setShowHistory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            clearData={clearData}
          />
        </div>
      ) : (
        <Keypad onKeyPress={handleKeyPress} />
      )}
    </div>
  );
}

export default Calculator;
