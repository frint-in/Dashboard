import React from "react";
import { FaPlus } from "react-icons/fa";

import "./internship.scss";
import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <div className="Internship">
      <div className="top">
        <div className="head"> Internships </div>
        <Link className="btn" to='/post-internship'>Add New <FaPlus/></Link>
      </div>
      <div className="box">CompanyProfile</div>
    </div>
  );
};

export default Internship;
