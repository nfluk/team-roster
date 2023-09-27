import React from 'react';

function SearchBox({ onSearchChange }) {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search for person"
        className="pa3 ba br2"
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
