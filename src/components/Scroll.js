import React from 'react';

function Scroll(props) {
  return (
    <div
      className="ba br3 bw1 b--blue ma2 pa4 center "
      style={{ overflow: 'scroll', height: '75vh', width: '80vw' }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
