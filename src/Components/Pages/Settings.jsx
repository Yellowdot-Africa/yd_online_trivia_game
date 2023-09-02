import React, { useState } from "react";
import "../../Styles/Settings.css";
import VolumeIcon from "../../assets/Icons/tabler_volume.svg";
import MutedIcon from "../../assets/Icons/unmute.svg";
import DropDown from "../../assets/Icons/fe_drop-down.svg";

const Settings = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50); 

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    setVolume((prevVolume) => (prevMuted ? 50 : prevVolume)); 
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const volumeColor = isMuted ? "#ccc" : "#5555A2"; 

  const sliderStyle = {
    background: `linear-gradient(to right, ${volumeColor} ${volume}%, #ccc ${volume}%)`,
  };

  return (
    <>
      <div className="settings-header">
        <h4>SETTINGS</h4> <hr />
      </div>
      <div className="vol-container">
        <p className="vol">Volume</p>
        <div className="vol-icon-container">
          <img
            src={isMuted ? MutedIcon : VolumeIcon}
            className="volume-icon"
            alt="vol"
            onClick={toggleMute}
          />
          <input
            className={`slider-slider ${isMuted ? "slider-disabled" : ""}`}
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            style={sliderStyle}
          />
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
