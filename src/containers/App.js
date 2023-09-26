import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="tc">
      <Navbar />
      <CardList users={users} />
    </div>
  );
}

export default App;
