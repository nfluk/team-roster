import React from 'react';

function Card({ id, name, email }) {
  return (
    <div className="tc bg-light-gray dib ma2 pa3 br3 grow shadow-5">
      <img src={`https://robohash.org/${id}?set=set4`} alt="A cool cat" />
      <div key={id}>
        <h2 className="f6">{name}</h2>
        <h3 className="f5">Division: Sales</h3>
        <a href={`mailto:${email}`} className="dim">
          {email}
        </a>
      </div>
    </div>
  );
}

export default Card;
