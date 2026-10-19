import React from 'react';

function Introduction({ name, bio }) {
  return (
    <div className="introduction">
      <h1>Hi, I'm {name}</h1>
      <p className="bio-text">{bio}</p>
    </div>
  );
}

export default Introduction;