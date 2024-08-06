import React, { useEffect, useState } from "react";
import "./style/UserLists.scss";

const UserLists = () => {
  const [searchVal, setSearchVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const usersData = [
    {
      name: "Recruiter Artissary",
      phone: "8899764366",
      email: "artissary@gmail.com",
      type: "Recruiter",
      location: "Goregaon, Mumbai, Maharashtra, India",
      function: "Business Development team",
    },
    {
      name: "Maxedited12 Singh",
      phone: "8877887788",
      email: "maxedited12@gmail.com",
      type: "Recruiter",
      location: "Mumbai, Maharashtra, India",
      function: "Consulting",
    },
    {
      name: "Rahul Captchatest",
      phone: "12453725",
      email: "rahul@gmail.com",
      type: "Employee",
      location: "Bengaluru, Karnataka, India",
      function: "Beta Testing",
    },
    {
      name: "Employee Login Test",
      phone: "1111111111",
      email: "employee.test@gmail.com",
      type: "Employee",
      location: "Bengaluru, Karnataka, India",
      function: "Analytics & Business Intelligence",
    },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);

    if (value.length > 1) {
      const matches = usersData
        .map(user => user.email)
        .filter(email => email.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (email) => {
    setSearchVal(email);
    setSuggestions([]);
    setSelectedEmail(email);
  };
  useEffect(() => {
    if (searchVal.length == 0){
      setSelectedEmail(null);
    }
  },[searchVal])

  const displayUsers = searchVal === "" ? usersData : selectedEmail
    ? usersData.filter(user => user.email.toLowerCase() === selectedEmail.toLowerCase())
    : usersData;

  return (
    <div className="user-list">
      <h2>Manage Users</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Email"
          value={searchVal}
          onChange={handleSearchChange}
        />
        <button className="add-button">Add</button>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((email, index) => (
              <li key={index} onClick={() => handleSuggestionClick(email)}>
                {email}
              </li>
            ))}
          </ul>
        )}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Type</th>
            <th>Location</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.length > 0 ? (
            displayUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>{user.location}</td>
                <td>{user.function}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserLists;
