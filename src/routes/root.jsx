import { Outlet, Link } from "react-router-dom";
import HomeIcon from "../Assets/Icons/homeicon.svg";
import ContentIcon from "../Assets/Icons/content.svg";
import UserIcon from "../Assets/Icons/user-icon.svg";
import LogOut from "../Assets/Icons/logout.svg";
import Elipse from "../Assets/Icons/Ellipse1.png";
import "../Styles/Root.css";




export default function Root() {

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <img src={HomeIcon} alt="home" />
              <Link  to={`/home/1`}>
                <span className="spann">Home</span>
              </Link>
            </li>
            <li>
              <img src={ContentIcon} alt="content" />

              <Link to={`/content/2`}>
                <span className="spann">Content</span>
              </Link>
            </li> 
            <li>
              <img src={UserIcon} alt="content" />

              <Link to={`/user/3`}>
                <span className="spann">User</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="center">
          <img src={Elipse} alt="elipse" />
          <p className="greetings">Welcome Back,</p>
          <p className="name">Blessing Dorcas</p>
          <a href="#">View</a>
        </div>
        <div className="bottom">
          <img className="logout-img" src={LogOut} alt="" />
          <p className="logout">Logout</p>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}


