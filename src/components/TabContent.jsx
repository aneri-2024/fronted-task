import React from "react";

function TabContent({ activeTab, history, memory }) {
  return (
    <div className="tab-content">
      {activeTab === "history" ? (
        <div className="history-content">
          {history.length === 0 ? (
            <p>No history available</p>
          ) : (
            <ul className="history-list">
              {history.map((entry, index) => (
                <li key={index} className="history-entry">
                  <b>{entry}</b>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="memory-content">
          {memory.length === 0 ? (
            <p>No memory saved</p>
          ) : (
            <ul className="memory-list">
              {memory.map((memValue, index) => (
                <li key={index}>
                  Memory {index + 1}: <b>{memValue}</b>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default TabContent;
