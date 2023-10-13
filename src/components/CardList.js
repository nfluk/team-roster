import React from 'react';
import Card from './Card';

function CardList({ users, loading }) {
  users = users.sort((a, b) => {
    const nameA = a.company.department.toLowerCase();
    const nameB = b.company.department.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const cards = users.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        phone={user.phone}
        email={user.email}
        division={user.company.department}
        title={user.company.title}
      />
    );
  });

  if (!cards.length && loading) {
    return (
      <div>
        <h1 className="dark-blue">Sorry! No matches found!</h1>
      </div>
    );
  }

  return <div>{cards}</div>;
}

export default CardList;
