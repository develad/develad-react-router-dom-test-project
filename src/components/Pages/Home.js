import React, { useContext } from 'react';
import styled from 'styled-components';
import { UsersStore } from '../store/Users.Store';
import { Link } from 'react-router-dom';

import UserCard from './UserCard';

function Home() {
  const { users } = useContext(UsersStore);
  return (
    <Cards>
      {users ? (
        users.map((user, index) => (
          <Link to={`${user.login.uuid}`} key={index}>
            <UserCard user={user} />
          </Link>
        ))
      ) : (
        <img
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif'
          alt='loading spinner'
        />
      )}
    </Cards>
  );
}

export default Home;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin-top: 60px;
`;
