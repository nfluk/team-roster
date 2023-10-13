import React from 'react';

function Card({ id, firstName, lastName, phone, email, division, title }) {
  return (
    <div className="tc bg-light-gray dib ma2 pa3 br3 shadow-5">
      <img
        src={`https://robohash.org/${id}?set=set4`}
        alt="A cool cat"
        className="grow"
      />
      <div key={id}>
        <h2 className="f6">
          {firstName} {lastName}
        </h2>
        <h3 className="f5 ttu">{division}</h3>
        <h3 className="f7 ttu">{title}</h3>
        <div className="bg-light-blue pa1 br3 shadow-3">
          <p>📞 {phone}</p>
          <p>
            ✉️{' '}
            <a href={`mailto:${email}`} target="blank_" className="dim">
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
