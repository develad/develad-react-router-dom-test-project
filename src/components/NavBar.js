import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as fa from 'react-icons/fa';

function NavBar() {
  return (
    <Nav>
      <NavLinks>
        <StyledLink to='/'>
          <fa.FaUserCircle />
        </StyledLink>
        <Ul>
          <Li>
            <Link to='/'>Home</Link>
          </Li>
          <Li>
            <Link to='/about'>About</Link>
          </Li>
        </Ul>
      </NavLinks>
    </Nav>
  );
}

export default NavBar;
const Flex_Center =
  'display: flex;align-items: center;justify-content: center;';
const Flex_SpaceBetween =
  'display: flex;align-items: center;justify-content: space-between;';

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #463a3a;
  position: fixed;
  top: 0;
  left: 0;
  ${Flex_Center}
  z-index:200;
`;

const NavLinks = styled.div`
  width: 100%;
  padding: 0 220px;
  ${Flex_SpaceBetween}

  @media (max-width:600px) {
    padding: 0 20px;
  }
`;

const Ul = styled.ul`
  width: 15%;
  ${Flex_SpaceBetween}
  @media (max-width:600px) {
    width: 40%;
  }
`;

const Li = styled.li`
  font-size: 1.5rem;
  list-style: none;
  font-weight: bolder;
`;
const StyledLink = styled(Link)`
  font-size: 2.3rem;
  ${Flex_Center}
`;
