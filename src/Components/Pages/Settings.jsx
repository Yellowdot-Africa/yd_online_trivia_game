import React, { useState, useEffect } from "react";
import "../../Styles/Settings.css";
import VolumeIcon from "../../assets/Icons/tabler_volume.svg";
import MutedIcon from "../../assets/Icons/unmute.svg";
import axios from "axios";

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

  const [gameSettings, setGameSettings] = useState([]);
  const [gameSetting, setGameSetting] = useState(null);

  const [selectedGameSettingID, setSelectedGameSettingID] = useState(1); 

  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status,setStatus]=useState(false)

  const token = sessionStorage.getItem("token");
  console.log("token", token);

 


    const fetchGameSettings = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameSettings/GetGameSettings",

          {
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(response.data.statusCode === "999"){
          setGameSettings(response.data);
          setStatus(true);
          setLoading(false);
        }else if(response.data.statusCode === "301"){
          setGameSettings(response.data);
          setStatus(false);
          setLoading(false);
        } else{

        }

      } catch (error) {
        setGameSettings("Unauthorized User");
        setLoading(false);
        setError("Unauthorized User");

      }
    };

    useEffect(() => {

      fetchGameSettings();
    }, []);

  console.log("gameSettings", gameSettings);


  const getGameSetting = async (gameSettingID) => {
    try {
      const response = await axios.get(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameSettings/GetGameSetting?gameSettingID=${gameSettingID}`,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGameSetting(response.data);
    } catch (error) {
      setError(error.message);
      console.error(`Error fetching game setting with ID ${gameSettingID}:`, error);
    }
  };

  useEffect(() => {

    getGameSetting();
  }, []);

  const saveGameSetting = async () => {
    try {
      const requestData = {
        
          "gameID": 1,
          "questionsPerDay": 10,
          "resetScorePerDay": false
        
      };

      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameSettings/SaveGameSetting",
        requestData,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGameSetting(response.data);
    } catch (error) {
      setError(error.message);
      console.error("Error saving game setting:", error);
    }
  };

  useEffect(() => {

    saveGameSetting();
  }, []);



  const deleteGameSetting = async (gameSettingID) => {
    try {
      await axios.delete(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameSettings/DeleteGameSetting?gameSettingID=${gameSettingID}`,
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGameSetting(null);
    } catch (error) {
      setError(error.message);
      console.error(`Error deleting game setting with ID ${gameSettingID}:`, error);
    }
  };

  useEffect(() => {

    deleteGameSetting();
  }, []);

  const fetchLanguages = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Helper/GameLanguages",
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLanguages(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching languages:", error);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, [token]);

  return (
    <>
      <div className="settings-header">
        <h4>SETTINGS</h4> <hr />
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="loading">Error fetching game settings: {error}</p>
      ) : (
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
                Default
              </p>
              <div className="select-container">
              <select className="language-select">
                {languages.map((language) => (
                  <option
                    className="lang-options"
                    key={language}
                    value={language}
                  >
                    {language}
                  </option>
                ))}
              </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
