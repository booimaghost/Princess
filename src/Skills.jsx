import React from 'react';

function Skills({ title, skills }) {
  return (
    <div className="skills-card">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;