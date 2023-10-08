// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetch users when the component mounts
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar onGetUsersClick={getUsers} isLoading={isLoading} />
      <div className="user-card-grid">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;
