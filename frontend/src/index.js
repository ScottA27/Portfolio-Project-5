// React imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import ReactDOM from "react-dom";
// Component imports
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
// CSS imports
import "./index.css";

ReactDOM.render(
  <Router>
    <CurrentUserProvider>
      <ProfileDataProvider>
        <App />
      </ProfileDataProvider>
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
