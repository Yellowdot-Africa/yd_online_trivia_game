import React from 'react';
import HomeIcon from "../../assets/icons/homeicon.svg";
import ContentIcon from "../../assets/icons/content.svg";
import UserIcon from "../../assets/icons/user-icon.svg";
import LogOut from "../../assets/icons/logout.svg";
import Elipse from "../../assets/icons/Ellipse 1.svg";
import { Link, Outlet } from "react-router-dom";
import "../../Styles/SideBar.css";


const SideBar=()=> {
  return (
    <>
    <div className='side-card'>
        <div className='side-bar' style={{backgroundColor: ""}}>
        <ul>
            <li>
              <img src={HomeIcon} alt="home" />
              <Link to={`home` }>
                <span className="spann">Home</span>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <img src={ContentIcon} alt="" />

              <Link
                to="/content"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="spann">Content</span>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <img src={UserIcon} alt="" />
              <Link
                to="/user"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="spann">Users</span>
              </Link>
            </li>
          </ul>

    
        </div>
        <div className='center'>
        <img src={Elipse} alt="" />
        <p>Welcome Back,</p>
        <p>Blessing Dorcas</p>
        </div>
          <div className="bottom">
          <img className="logout" src= {LogOut} alt="" />

            Logout</div>
            <div id="detail">
        <Outlet />
      </div>
        </div>
    </>
  )
}

export default SideBar;





