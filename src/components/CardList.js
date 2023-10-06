import React from 'react';
import Card from './Card';

function CardList({ users, loading, division }) {
  const cards = users.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        division={division}
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
