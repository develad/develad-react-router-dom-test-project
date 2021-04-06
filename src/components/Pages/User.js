import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersStore } from '../store/Users.Store';
import UserCardFull from './UserCardFull';

function User({ match }) {
  const { users } = useContext(UsersStore);
  const [user, setUser] = useState(null);
  //   console.log(match.params.id);

  let history = useHistory();

  useEffect(() => {
    if (users) {
      const SingelUser = users.filter(
        (user) => user.login.uuid === match.params.id
      );
      console.log(SingelUser);
      setUser(SingelUser[0]);
    } else {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [users]);

  return <>{user ? <UserCardFull user={user}></UserCardFull> : <p>null</p>}</>;
}

export default User;
