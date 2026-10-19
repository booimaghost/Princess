import React from 'react';

function Contact({ email, linkedin, github }) {
  return (
    <div className="contact">
      <h3>Get in Touch</h3>
      <p>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p><strong>LinkedIn:</strong>{' '}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          View LinkedIn Profile
        </a>
      </p>
     <p><strong>GitHub:</strong>{' '}
        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
          github.com/{github}
        </a>
      </p>
      </div>
  );
}

export default Contact;