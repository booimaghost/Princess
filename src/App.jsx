import React from 'react';
import Introduction from './Introduction';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Contact from './Contact';
import './App.css';
import profileImage from './Flattershy.jpg';

function App() {
  return (
    <div className="app-container">
      <header className="header-section">
        <img 
        src={profileImage}
          alt="Profile" 
          className="profile-pic" 
        />
        <Introduction 
          name="Danielle" 
          bio="A Medical Student Ready to find an intersection between Medicine and Technology that is worth advancement and innovation. I also like the show 'My Little Pony' and I believe in fairy dust." 
        />
      </header>

      <main className="content-section">
        {/* Reusing the Skills component with props */}
        <Skills 
          title="Technical & Medical Skills" 
          skills={["Research, Negotiation, Debating, Advocacy"]} 
        />
        
        <Skills 
          title="Personal & Leadership Skills" 
          skills={["Team Leadership", "Public Speaking", "Creative Writing"]} 
        />

        {/* Bonus: Reusable component for hobbies */}
        <Hobbies 
          hobbies={["Archery", "Swimming", "Adventure Series", "Film Photography"]} 
        />
      </main>

      <footer className="footer-section">
        <Contact 
          email="mwende.danielle@gmail.com" 
          linkedin="https://www.linkedin.com/in/dannie-mutua-8369a1368"
          github= "booimaghost"
        />
      </footer>
    </div>
  );
}

export default App;