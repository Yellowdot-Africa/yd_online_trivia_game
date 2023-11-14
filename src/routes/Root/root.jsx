import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from "../../Assets/Icons/homeicon.svg";
import ContentIcon from "../../Assets/Icons/content.svg";
import UserIcon from "../../Assets/Icons/user-icon.svg";
import LogOut from "../../Assets/Icons/logout.svg";
import Elipse from "../../Assets/Icons/Ellipse1.png";
import "../Root/Root.css";
import AdminCard from "../../Components/ADMINCARD/AdminCard";
import LogOutCard from "../../Components/LogOut/LogOutCard";

const Root = () => {
  const [showAdminCard, setShowAdminCard] = useState(false);
  const [showLogoutCard, setshowLogoutCard]= useState(false);

  const openAdminCard = () => {
    setShowAdminCard(true);
  };
  const closeAdminCard = () => {
    setShowAdminCard(false);
  };

  const openLogoutCard =()=>{
    setshowLogoutCard(true);
  };

  const closeLogoutCard =()=>{
    setshowLogoutCard(false);
  };
  
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/home/1`}>
                <img src={HomeIcon} alt="home" />
                <span className="spann">Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/content/2`}>
                <img src={ContentIcon} alt="content" />

                <span className="spann">Content</span>
              </Link>
            </li>
            <li>
              <Link to={`/user/3`}>
                <img src={UserIcon} alt="content" />

                <span className="spann">User</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="center">
          <img src={Elipse} alt="elipse" />
          <p className="greetings">Welcome Back,</p>
          <p className="name">Blessing Dorcas</p>
          <Link to={`/admin-card`} onClick={(e)=>{ e.preventDefault(); openAdminCard();}}>
            View
            </Link>
        </div>
        <div className="bottom">
        <Link to={`/logout`} onClick={(e)=>{ e.preventDefault(); openLogoutCard();}}>
          <img className="logout-img" src={LogOut} alt="" />
          <p className="logout">Logout</p>
          </Link>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      {showAdminCard && (
        <div className="modal">
          <AdminCard />
          <p onClick={closeAdminCard}>Close</p>
        </div>
        
      )}
        {showLogoutCard && (
        <div className="modal">
          <LogOutCard />
          <p onClick={closeLogoutCard}>Close</p>
        </div>
        
      )}
    </>
  );
};

export default Root;




