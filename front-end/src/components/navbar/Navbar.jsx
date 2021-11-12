import "./navbar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { useState } from "react";
import { SidebarData } from "./SidebarData";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
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
              <Link to="/about">
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
              <a href="#">
                <BsIcons.BsInstagram />
              </a>
              <a href="#">
                <BsIcons.BsFacebook />
              </a>
              <a href="#">
                <BsIcons.BsTwitter />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
