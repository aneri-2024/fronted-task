import React from "react";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";

function TabPanel({
  history,
  memory,
  setShowHistory,
  activeTab,
  setActiveTab,
  clearData,
}) {
  const hideHistory = () => setShowHistory(false);

  return (
    <div className="history-panel">
      <div className="history-header">
        <h2>{activeTab === "history" ? "History" : "Memory"}</h2>
        <button onClick={hideHistory} className="close-button">
          &#10005;
        </button>
      </div>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabContent activeTab={activeTab} history={history} memory={memory} />

      <button onClick={clearData} className="delete-button">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default TabPanel;
