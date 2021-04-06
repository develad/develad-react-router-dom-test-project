import React from 'react';

function About() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>This is a Demo site!</h1>
        <h2>
          This project design to practice the react-router-dom package
          capabilities
        </h2>
        <h2>
          Use the NavBar to navigate on the site or press on the user picture
        </h2>
        <h1 style={{ marginTop: '8rem' }}>
          created by: Elad Bar {new Date().getFullYear()} &copy;
        </h1>
      </div>
    </>
  );
}

export default About;
