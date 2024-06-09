import React, { useState, useRef } from "react";
import Prev from "../../assets/Icons/chevron-left.png";
import SettingIcon from "../../assets/Icons/settingsash.png";
import VolumeIcon from "../../assets/Icons/volume.png";
import DropDown from "../../assets/Icons/arrwdrp-dwn.png";
import MutedIcon from "../../assets/Icons/unmute.svg";
import Language from "../../assets/Icons/language.png";
import MusicFile from "../../assets/MP3/Asake-Amapiano.mp3";
import "../Settings/Settings.css";
import { useNavigate } from "react-router-dom";
import NavigationIcons from "../../Components/NavigationIcons";



const Settings = ({ showShareButtons }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const navigate = useNavigate();

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
 
  const volumeColor = isMuted ? "#ccc" : "#6F0078";

  const sliderStyle = {
    background: `linear-gradient(to right, ${volumeColor} ${volume}%, #ccc ${volume}%)`,
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      
      <div className="settings">
      
        <div className="settings-content">
          <div className="settings-text">
            <h2>Settings</h2>
          </div>
        </div>
        <div className="settings-container">
        <div className="setting-card">
          <div className="four">
            <img src={SettingIcon} alt="" />
          </div>
          <p>
            All setting here are strictly for game controls and will not affect
            the operations of your device
          </p>
        </div>

        <div className={`vol-container ${showShareButtons ? "blur" : ""}`}>
          {/* <audio ref={audioRef} controls src={MusicFile}></audio> */}

          <div className="vol-icon-container">
            <img
              src={isMuted ? MutedIcon : VolumeIcon}
              className="volume-icon"
              alt="vol"
              onClick={toggleMute}
            />

            <p className="sound">Sound</p>
          </div>
          <input
            className={`slider-slider ${isMuted ? "slider-disabled" : ""}`}
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            style={sliderStyle}
          />

          <div className="lang-container">
            <img src={Language} alt="lang" />
            <p className="lang-text">Language</p>
          </div>
          <div className="default-card">
              <p className="default">
                Default 
              </p>
              <img src={DropDown} alt="dropdown" />
            </div>
        </div>
       
      </div>
      </div>
      <div className="settings-nav-icon">
      <NavigationIcons/>

      </div>
    </>
  );
};

export default Settings;
