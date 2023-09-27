import React from 'react';
import Card from './Card';

function CardList({ users }) {
  const cards = users.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });

  if (!cards.length) {
    return (
      <div>
        <h1 className="dark-blue">Sorry! No matches found!</h1>
      </div>
    );
  } else {
    return <div>{cards}</div>;
  }
}

export default CardList;
