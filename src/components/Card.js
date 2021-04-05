import React from 'react';
import { Link } from 'react-router-dom';

function Card({ user }) {
  return (
    <div key={user.login.uuid}>
      <Link to={`${user.login.uuid}`}>{user.login.uuid}</Link>
    </div>
  );
}

export default Card;
