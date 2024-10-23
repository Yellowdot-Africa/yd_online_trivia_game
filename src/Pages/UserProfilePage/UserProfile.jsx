import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, fetchUserByIdProfile, logoutUser , updateUserProfile } from '../../features/userProfile/userProfileSlice';
import '../../Pages/UserProfilePage/UserProfile.css';
import Prev from '../../assets/Icons/chevron-left.png';
import Edit from '../../assets/Icons/editpic.png';
import Phone from '../../assets/Icons/star.png';
import CloseIcon from '../../assets/Icons/close-iccon.svg';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);
  const msisdn = useSelector((state) => state.auth.msisdn);
  const userID = useSelector((state) => state.auth.userID);
  const authToken = useSelector(state => state.auth.jwt);
  const isLoading = useSelector((state) => state.userProfile.isLoading);
  const error = useSelector((state) => state.userProfile.error);
  const userStats = useSelector((state) => state.userProfile.userStats);
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username || '');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(msisdn || '');
  const [editedEmail, setEditedEmail] = useState(email || '');
  const [isInputEdited, setIsInputEdited] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const firstLetter = username ? username.charAt(0).toUpperCase() : '';

  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    if (userID && authToken) {
      dispatch(fetchUserProfile({ userID, token: authToken }));
      dispatch(fetchUserByIdProfile(userID));
    }
  }, [dispatch, userID, authToken]);
  

  useEffect(() => {
    if (userProfile) {
      setEditedUsername(userProfile.username);
      setEditedPhoneNumber(userProfile.msisdn);
      setEditedEmail(userProfile.email);
    }
  }, [userProfile]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleGoBack = () => {
    setIsEditMode(false);
    navigate(-1); 
  };

  // const handleSaveClick = () => {
  //   setIsEditMode(false);
  // };

  const handleSaveClick = () => {
    dispatch(updateUserProfile({
      id: userID,
      username: editedUsername,
      email: editedEmail,
      msisdn: editedPhoneNumber,
      // password: '',
    }));
    setIsEditMode(false);
  };

  

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsInputEdited(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalVisible(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalVisible(false);
  };

  const handleLogoutConfirm = () => {
    dispatch(logoutUser()); 
    localStorage.removeItem('authToken'); 
    localStorage.removeItem('userProfile'); 


    navigate('/'); 
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-profile">
      <div className="user-content">
        <div className="header-text">
          <img src={Prev} alt="prev" onClick={handleGoBack} />
          {isEditMode ? (
            <h2 className="edit-user-profile">Edit User Profile</h2>
          ) : (
            <>
              <h2 className="user-prof-heading">User Profile</h2>
              <p onClick={handleEditClick}>Edit Profile</p>
            </>
          )}
        </div>
      </div>

      {isEditMode ? (
        <div className="edit-mode">
          <form action="">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="User Name"
              value={editedUsername}
              onChange={handleInputChange(setEditedUsername)}
            />
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              id="phonenumber"
              placeholder="Phone Number"
              className="input-field"
              readOnly={true}
              value={editedPhoneNumber}
              onChange={handleInputChange(setEditedPhoneNumber)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input-field"
              id="email"
              placeholder="Email"
              readOnly={true}
              value={editedEmail}
              onChange={handleInputChange(setEditedEmail)}
            />
          </form>

          <button 
            className={`save-button ${isInputEdited ? 'active' : ''}`} 
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div className='user-container'>
          <div className="user-details">
            <div className="avatar">
              <p>{firstLetter}</p>
              {/* <img src={Edit} alt="" /> */}
            </div>
            <div className="user-info">
              {/* <p className="phone-number">
                <img src={Phone} alt="phone" /> {editedPhoneNumber}
              </p>
              <p className="phone-number">{editedEmail}</p>
              <p className="user-name">{editedUsername}</p> */}
               <p className="phone-number">
                <img src={Phone} alt="phone" /> {userProfile?.msisdn}
              </p>
              <p className="phone-number">{userProfile?.email}</p>
              <p className="user-name">{userProfile?.username}</p>
            </div>
          </div>
        </div>
      )}

      {!isEditMode && (
        <>
          <div className="user-stats">
            <div className="user-info-heading">
              <h3>User Info</h3>
            </div>
          </div>
          {userStats && (
            <div className="user-info-deets">
              <div className="user-deetails-info">
                <div className="gem">
                  <p className="gemm">Games Played Count</p>
                  <p className="gem-no">{userStats.gamesPlayedCount || 0}</p>
                </div>
                <div className="prize">
                  <p className="prz">Total Score</p>
                  <p className="prz-no">{userStats.totalScore || 0}</p>
                </div>
                <div className="prize">
                  <p className="prz">Correct Answer Percentage</p>
                  <p className="prz-no">{userStats.correctAnswerPercentage || "0%"}</p>
                </div>
              </div>
            </div>
          )}
          <button className="logout-button" onClick={handleLogoutClick}>
            Logout
          </button>
        </>
      )}

      {isLogoutModalVisible && (
        <>
        <div className="backdropp" onClick={() => setShowLogoutModal(false)}></div>

        <div className="logout-modal">
          <div className="logout-modal-content">
            <img src={CloseIcon} alt="close" className="close-icon" onClick={closeLogoutModal} />
            <h3>Log out</h3>
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeLogoutModal}>
                No, Cancel
              </button>
              <button className="confirm-logout-button" onClick={handleLogoutConfirm}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;









