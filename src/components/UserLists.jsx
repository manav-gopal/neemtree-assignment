import React, { useState } from "react";
import "./style/UserLists.scss";

const UserLists = () => {
  const [searchVal, setSearchVal] = useState("");

  const usersData = [
    {
      name: "Recruiter Artissary",
      phone: "8899764366",
      type: "Recruiter",
      location: "Goregaon, Mumbai, Maharashtra, India",
      function: "Business Development team",
    },
    {
      name: "Maxedited12 Singh",
      phone: "8877887788",
      type: "Recruiter",
      location: "Mumbai, Maharashtra, India",
      function: "Consulting",
    },
    {
      name: "Rahul Captchatest",
      phone: "12453725",
      type: "Employee",
      location: "Bengaluru, Karnataka, India",
      function: "Beta Testing",
    },
    {
      name: "Employee Login Test",
      phone: "1111111111",
      type: "Employee",
      location: "Bengaluru, Karnataka, India",
      function: "Analytics & Business Intelligence",
    },
  ];

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      user.type.toLowerCase().includes(searchVal.toLowerCase()) ||
      user.location.toLowerCase().includes(searchVal.toLowerCase()) ||
      user.function.toLowerCase().includes(searchVal.toLowerCase()) ||
      user.phone.includes(searchVal.toLowerCase())
  );

  return (
    <div className="user-list">
      <h2>Manage Users</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search User"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="add-button">Add</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Type</th>
            <th>Location</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.type}</td>
              <td>{user.location}</td>
              <td>{user.function}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLists;
