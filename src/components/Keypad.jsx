import React from "react";

const keys = [
  ["MC", "MR", "M+", "M-", "MS"],
  ["CE", "C", "⌫", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

function Keypad({ onKeyPress }) {
  return (
    <div className="keypad">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="key-row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className="key"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keypad;
