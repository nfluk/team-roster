import React from 'react';

function Card({ id, name, email }) {
  return (
    <div>
      <img src={`https://robohash.org/${id}?set=set4`} alt="A cool cat" />
      <div key={id}>
        <h2>{name}</h2>
        <h3>Division: Sales</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
