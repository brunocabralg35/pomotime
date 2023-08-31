import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import PomodoroTimer from "./components/PomodoroTimer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  </React.StrictMode>
);
