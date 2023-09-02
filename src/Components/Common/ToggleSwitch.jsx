


import React from "react";
import "../../Styles/ToggleSwitch.css";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="label">
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
