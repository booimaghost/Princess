import React from 'react';

function Hobbies({ hobbies }) {
  return (
    <div className="hobbies-card">
      <h3>Hobbies & Interests</h3>
      <div className="hobby-tags">
        {hobbies.map((hobby, index) => (
          <span key={index} className="hobby-tag">{hobby}</span>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;