import React from "react";

import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import {FaLocationCrosshairs} from 'react-icons/fa6'
import { IoIosPeople } from "react-icons/io";

import "./studentDashboard.scss";

const StudentDashboard = () => {
  return (
    <div className="StudentDashboard">
      <div>
        <div className="hello">Hello! Ritav </div>
        <div className="welcome">Welcome to the Dashboard </div>
      </div>
      <div className="cards">
        <div className="cardBox">
          <div className="text">
            <div>Number of Tracks</div>
            <div>12</div>
          </div>
          <div className="icon">
            <FaMapMarkedAlt />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of Users</div>
            <div>12</div>
          </div>
          <div className="icon">
            <IoIosPeople />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of Locations</div>
            <div>12</div>
          </div>
          <div className="icon">
            <FaLocationCrosshairs />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of tracks</div>
            <div>12</div>
          </div>
          <div className="icon">
            <FaHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
