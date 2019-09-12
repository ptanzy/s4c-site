import React from "react";
import "./style.css";

function NoMatch() {
  return (
    <div className="no-match">
      <h1>404 ERROR</h1>
      <p class="flow-text">We are awfully sorry, but the page you are trying to reach cannot currently be found.
        Please refresh or navigate back to our homepage. Your patience is appreciated!</p>
    </div>
  );
}

export default NoMatch;