import React, { useState } from "react";

import "./sidebar.scss";

import {
  FaHome,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaLock,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const StudentSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/student-dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/student-profile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/applied-internship",
      name: "Applied Internships",
      icon: <PiSuitcaseSimpleBold />,
    },
    {
      path: "/student-password",
      name: "Change Password",
      icon: <FaLock />,
    },
  ];
  return (
    <div className="StudentSidebar">
      <div className="Sidebar">
        <div
          style={{ width: isOpen ? "18rem" : "4.5rem" }}
          className="container"
        >
          <div className="sidebarTop">
            <div className="top_section">
              {/* <NavLink to={"/"} key={1} style={{ backgroundColor: '#1a64ae00', transition: "1s"}}><img src={Logo} alt="Full-logo" style={{ display: isOpen ? "block" : "none" }} className="logo" /></NavLink> */}
              {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
              <div
                style={{ marginLeft: isOpen ? "228px" : "8px" }}
                className="bars"
              >
                <FaChevronCircleRight
                  onClick={toggle}
                  className="abc"
                  style={{ display: isOpen ? "none" : "block", color: "#fff" }}
                />
                <FaChevronCircleLeft
                  onClick={toggle}
                  className="cba"
                  style={{ display: isOpen ? "block" : "none", color: "#fff" }}
                />
              </div>
            </div>
            <hr
              className="hr-bar"
              style={{ display: isOpen ? "block" : "none" }}
            />
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="sidebarBottom">
            <hr
              className="hr-bar2"
              style={{ display: isOpen ? "block" : "none" }}
            />
            <NavLink
              to="/student-dashboard"
              className="link active"
              style={{ marginBottom: "15px" }}
            >
              <div className="icon">
                <FaPowerOff />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </NavLink>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default StudentSidebar;
