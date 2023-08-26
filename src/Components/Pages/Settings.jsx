import React from "react";
import "../../Styles/Settings.css";
import VolumeIcon from "../../assets/Icons/tabler_volume.svg";
import DropDown from "../../assets/Icons/fe_drop-down.svg";

const Settings = () => {
  return (
    <>
      <div className="settings-header">
        <h4>SETTINGS</h4> <hr />
      </div>
      <div className="vol-container">
        <p className="vol">Volume</p>
        <div className="vol-icon-container">
          <img src={VolumeIcon} alt="vol" />
          <input className="slider" type="range" min="1" max="100" />
        </div>
        <div className="lang-container">
          <p className="lang">Language</p>
          <div className="default-card">
            <p className="default">
              Default <img src={DropDown} alt="dropdown" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
