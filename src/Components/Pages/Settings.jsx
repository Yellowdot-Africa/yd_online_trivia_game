import React, {useState} from "react";
import "../../Styles/Settings.css";
import VolumeIcon from "../../assets/Icons/tabler_volume.svg";
import DropDown from "../../assets/Icons/fe_drop-down.svg";

const Settings = () => {
  const [isDisabled, setIsDisabled]= useState(false);
  const handleDisabled =()=>{
    return setIsDisabled(prevState=> !prevState)
  }
  return (
    <>
      <div className="settings-header">
        <h4>SETTINGS</h4> <hr />
      </div>
      <div className="vol-container">
        <p className="vol">Volume</p>
        <div className="vol-icon-container">
        <img src={VolumeIcon} className={`volume-icon ${isDisabled ? "volume-disabled" : ""}`} alt="vol" onClick={handleDisabled} />
          {/* <img className="volume-image" src={ isDisabled ? DisabledIcon : VolumeIcon } alt="vol" onClick={handleDisabled}/> */}
          <input className={`slider-slider ${isDisabled ? "slider-disabled" : ""}`} type="range" min="1" max="100"  disabled={isDisabled}/>
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
