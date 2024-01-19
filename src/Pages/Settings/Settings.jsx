import React, { useState, useRef } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import VolumeIcon from "../../assets/Icons/Volume-icon.svg";
import Language from "../../assets/Icons/language.svg";
import Default from "../../assets/Icons/default-icon.svg";
import Back from "../../assets/Icons/back.svg";
import "../Settings/Settings.css";

const Settings = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);

  const toggleMute = () => {
    const audio = audioRef.current;
    setIsMuted(!isMuted);
    audio.volume = isMuted ? volume / 100 : 0;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    const audio = audioRef.current;
    audio.volume = newVolume / 100;
    setIsMuted(newVolume === 0);
  };

  const volumeColor = isMuted ? "#FFFFFF66" : "#DF03F2";

  const sliderStyle = {
    background: `linear-gradient(to right, ${volumeColor} ${volume}%, #ccc ${volume}%)`,
  };

  return (
    <>
      <HomeNavBar />
      <div className="settings">
        <img className="back-icon" src={Back} alt="" />
        <h1>Settings</h1>
        <div className="sound-lang">
          <div className="sound">
            <div className="sound-text">
              <img
                src={isMuted ? MutedIcon : VolumeIcon}
                className="volume-icon"
                alt="vol"
                onClick={toggleMute}
              />
              <p>Sound</p>
            </div>

            <div className="vol-icon-container">
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
          </div>
          <div className="language-container">
            <div className="language">
            <img src={Language} alt="" />
            <p>Language</p>
            </div>
           
            <div className="default">
              <p>Default</p>
              <img src={Default} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
