import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

function App() {
  const [users, setUsers] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <Navbar onSearchChange={onSearchChange} />
      <Scroll>
        <CardList users={filteredUsers} loading={loading} />
      </Scroll>
    </div>
  );
}

export default App;
