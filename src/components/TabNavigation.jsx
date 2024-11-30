import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "history" ? "active" : ""}`}
        onClick={() => setActiveTab("history")}
      >
        History
      </button>
      <button
        className={`tab ${activeTab === "memory" ? "active" : ""}`}
        onClick={() => setActiveTab("memory")}
      >
        Memory
      </button>
    </div>
  );
}

export default TabNavigation;
