import "./navbar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { useState } from "react";
import Login from '../Login/Login';


export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [loginBar, setLoginBar] = useState(false);

  const showLogin = () => setLoginBar(!loginBar);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-wrapper-white">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <div className="nav-text">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link to="/gallery">
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </div>
            <div className="nav-icons">
              <li>
                <a href="#nowhere">
                  <BsIcons.BsInstagram />
                </a>
                <a href="#nowhere">
                  <BsIcons.BsFacebook />
                </a>
                <a href="#nowhere">
                  <BsIcons.BsTwitter />
                </a>
              </li>
            </div>

            <div className="nav-icons nav__login" onClick={showLogin}>
              <li>
                  <a href="#nowhere">
                    <span className="navbar__inline">
                      <FaIcons.FaRegUserCircle className="client--icon"/>
                      Client Login
                    </span>
                  </a>
              </li>
            </div>
        </ul>
      </nav>

      <div className={loginBar ? "login loginactive" : "login"} >
              <Login />
      </div>
    </div>
  );
}
