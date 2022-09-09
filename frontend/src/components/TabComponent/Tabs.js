import React, { useState } from "react";

import BacklogTab from "../AllTabs/BacklogTab";
import PlayingTab from "../AllTabs/PlayingTab";
import FinnishedTab from "../AllTabs/FinnishedTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("BacklogTab");

  const handleBacklogTab = () => {
    setActiveTab("BacklogTab");
  };
  const handlePlayingTab = () => {
    setActiveTab("PlayingTab");
  };
  const handleFinnishedTab = () => {
    setActiveTab("FinnishedTab");
  };
  return (
    <div className="Tabs">
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li
            className={activeTab === "BacklogTab" ? "active" : ""}
            onClick={handleBacklogTab}
          >
            Backlog
          </li>
          <li
            className={activeTab === "PlayingTab" ? "active" : ""}
            onClick={handlePlayingTab}
          >
            Jogando
          </li>
          <li
            className={activeTab === "FinnishedTab" ? "active" : ""}
            onClick={handleFinnishedTab}
          >
            Finalizado
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "BacklogTab" ? <BacklogTab /> : ""}
          {activeTab === "PlayingTab" ? <PlayingTab /> : ""}
          {activeTab === "FinnishedTab" ? <FinnishedTab /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
