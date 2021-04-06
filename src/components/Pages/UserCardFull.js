import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function UserCard({ user }) {
  let history = useHistory();
  return (
    <>
      <Card>
        <Img
          src={user.picture.large}
          alt='user'
          onClick={() => history.push('/')}
        />
        <h1>
          {user.name.first} {user.name.last}
        </h1>
        <h3>Country: {user.location.country}</h3>
        <h2>E-mail: {user.email}</h2>
        <h3>Gender: {user.gender}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>
          Street: {user.location.street.name} {user.location.street.number}
        </h3>
        <h3>Postcode: {user.location.postcode}</h3>
      </Card>
    </>
  );
}

export default UserCard;

const Img = styled.img`
  border-radius: 50%;
  cursor: pointer;
  filter: grayscale(90%);
  &:hover {
    transform: translateY(-10px);
    filter: none;
    transition: all 0.1s ease;
  }
  @media (max-width: 600px) {
    filter: none;
  }
`;
const Card = styled.div`
  min-height: 400px;
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(29, 26, 36);
  padding: 40px;
  border-radius: 25px;
  color: white;
  margin: 10px;
  z-index: 1;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
