import React from 'react';

function Card({ id, firstName, lastName, email, division, title }) {
  return (
    <div className="tc bg-light-gray dib ma2 pa3 br3 grow shadow-5">
      <img src={`https://robohash.org/${id}?set=set4`} alt="A cool cat" />
      <div key={id}>
        <h2 className="f6">
          {firstName} {lastName}
        </h2>
        <h3 className="f5 ttu">{division}</h3>
        <h3 className="f7 ttu">{title}</h3>
        <a href={`mailto:${email}`} className="dim">
          {email}
        </a>
      </div>
    </div>
  );
}

export default Card;
