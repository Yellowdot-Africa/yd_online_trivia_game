import React, { useState, useRef } from "react";
import Prev from "../../assets/Icons/chevron-left.png";
import SettingIcon from "../../assets/Icons/settingsash.png";
import VolumeIcon from "../../assets/Icons/volume.png";
import DropDown from "../../assets/Icons/arrwdrp-dwn.png";
import MutedIcon from "../../assets/Icons/unmute.svg";
import Language from "../../assets/Icons/language.png";
import MusicFile from "../../assets/MP3/Asake-Amapiano.mp3";
import Modal from "../../Components/Modal";
import { ChangePinForm} from "../../Components/PinSettings";
import "../Settings/Settings.css";
import { useNavigate } from "react-router-dom";
import NavigationIcons from "../../Components/NavigationIcons";

const Settings = ({ showShareButtons }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

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

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`settings ${showModal ? "blur-background" : ""}`}>
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
              All setting here are strictly for game controls and will not
              affect the operations of your device
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
              <p className="default">Default</p>
              <img src={DropDown} alt="dropdown" />
            </div>

            <div className="settings-buttons">
              {/* <button
                className="settings-btn"
                onClick={() =>
                  openModal("Update Password", <p>this is a form</p>
                  )
                }
              >
                Update Password
              </button> */}
              {/* <button
                className="settings-btn"
                onClick={() => openModal("Reset PIN", <ResetPinForm />)}
              >
                Reset PIN
              </button> */}
              <button
                className="settings-btn"
                onClick={() => openModal("Update PIN", <ChangePinForm />)}
              >
                Change PIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-nav-icon">
        <NavigationIcons bgColor={"#FFFFFF"} />
      </div>
      <Modal showModal={showModal} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Settings;





