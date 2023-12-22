import React, { useState } from "react";
import "./postInternship.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";

function PostInternship() {
  const [startDate1, setstartDate1] = useState(new Date());

  //For Store Dropdown
  const [selectedOption1, setselectedOption1] = useState(null);
  const [dropdownOpen1, setdropdownOpen1] = useState(false);
  const options1 = ["Hengerabari", "Zoo-Road"];
  const handleOptionClick1 = (option1) => {
    setselectedOption1(option1);
    setdropdownOpen1(false);
  };

  //For Service Dropdown
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    "Wash and Fold",
    "Ironing",
    "Premium Laundry",
    "Dry Cleaning",
  ];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const [Data, setData] = useState({
    pickupdate: startDate1,
    servicelocation: "Hengrabari",
    service: "Wash and Fold",
  });

  const handleFormSubmit = () => {
    setData({
      pickupdate: startDate1,
      servicelocation: "Hengrabari",
      service: "Wash and Fold",
      name: "",
      phoneno: "",
      hno: "",
      Pincode: "",
      address: "",
      Landmark: "",
    });
    alert("Internship Posted Successfully!");
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="PostInternship">
      <div className="space"></div>
      <div className="head">Schedule a Pick Up</div>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="datepicker">
          <DatePicker
            className="date"
            selected={startDate1}
            onChange={(date) => setstartDate1(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Pickup date"
          />
        </div>
        <div className="Dropdown">
          <div
            className={`dropdown-header ${dropdownOpen1 ? "open" : ""}`}
            onClick={() => setdropdownOpen1(!dropdownOpen1)}
          >
            {selectedOption1 ? selectedOption1 : "Select a Store"}
            <div className="custom-down-icon">
              <FaChevronDown />
            </div>
          </div>
          {dropdownOpen1 && (
            <div className="options">
              {options1.map((option1) => (
                <div
                  key={option1}
                  className="option"
                  onClick={() => handleOptionClick1(option1)}
                  onChange={handleInputChange}
                  value={Data.servicelocation}
                >
                  {option1}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Dropdown">
          <div
            className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedOption ? selectedOption : "Select a Service"}
            <div className="custom-down-icon">
              <FaChevronDown />
            </div>
          </div>
          {dropdownOpen && (
            <div className="options">
              {options.map((option) => (
                <div
                  key={option}
                  className="option"
                  onClick={() => handleOptionClick(option)}
                  onChange={handleInputChange}
                  value={Data.service}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          required
          type="text"
          className="input"
          id="name"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          required
          type="tel"
          className="input"
          id="phno"
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
        <input
          required
          type="number"
          className="input"
          id="hono"
          placeholder="House Number"
          onChange={handleInputChange}
        />
        <input
          required
          type="number"
          className="input"
          id="pin"
          placeholder="Pincode"
          onChange={handleInputChange}
        />
        <input
          required
          type="text"
          className="input"
          id="address"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          id="landmark"
          placeholder="Landmark"
          onChange={handleInputChange}
        />
        <div className="btn-div">
          <input type="submit" value="Submit" className="submit" />
          <input type="reset" value="Reset" className="reset" />
        </div>
      </form>
    </div>
  );
}

export default PostInternship;
