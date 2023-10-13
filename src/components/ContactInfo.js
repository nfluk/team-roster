import React from 'react';

function ContactInfo({ phone, email }) {
  return (
    <div>
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
  );
}

export default ContactInfo;
