import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

function App() {
  const [users, setUsers] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [loading, setLoading] = useState(false);

  const organizationName = 'Capsule Corp.';

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=13')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
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
    const userName = `${user.firstName} ${user.lastName}`;
    return userName.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className="tc">
      <Navbar
        onSearchChange={onSearchChange}
        organizationName={organizationName}
      />
      <Scroll>
        <CardList users={filteredUsers} loading={loading} />
      </Scroll>
    </div>
  );
}

export default App;
