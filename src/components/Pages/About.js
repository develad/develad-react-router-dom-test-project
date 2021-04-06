import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <>
      <Wrapper style={{ textAlign: 'center' }}>
        <h1>This is a Demo site!</h1>
        <h2>
          This project design to practice the react-router-dom package
          capabilities
        </h2>
        <h2>
          Use the NavBar to navigate on the site or press on the user picture
        </h2>
        <h1 style={{ marginTop: '8rem' }}>
          created by:
          <br />
          Elad Bar {new Date().getFullYear()} &copy;
        </h1>
      </Wrapper>
    </>
  );
}

export default About;

const Wrapper = styled.div`
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;
