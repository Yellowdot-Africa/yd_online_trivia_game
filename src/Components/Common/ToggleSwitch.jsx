import React from "react";
import "../../Styles/ToggleSwitch.css";

function ToggleSwitch({ showBalance, onToggle }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={showBalance} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default ToggleSwitch;
