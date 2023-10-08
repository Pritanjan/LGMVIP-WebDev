// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onGetUsersClick, isLoading }) => {
  return (
    <div className="navbar">
      <h1>Brand Name</h1>
      <button onClick={onGetUsersClick} disabled={isLoading}>
        Get Users
      </button>
    </div>
  );
};

export default Navbar;
