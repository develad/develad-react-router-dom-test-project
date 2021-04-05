// import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { UsersStore } from '../store/Users.Store';

// function User({ match }) {
//   console.log(match.params.id);
//   let history = useHistory();
//   const { users } = useContext(UsersStore);
//   const [user, setUser] = useState(null);
//   let SingelUser = [];

//   useEffect(
//     (users) => {
//       if (users) {
//         SingelUser = users.filter(
//           (user) => user.login.uuid === match.params.id
//         );
//         console.log(SingelUser);
//         setUser(user);
//       }
//       if (SingelUser.length === 0) {
//         history.push('/');
//       }
//     },
//     [user]
//   );

//   //   if (users) {
//   //     SingelUser = users.filter((user) => user.login.uuid === match.params.id);
//   //     console.log(SingelUser);
//   //     if (SingelUser.length === 0) {
//   //       history.push('/');
//   //   }

//   return <>{user ? <h1>{user.email}</h1> : ''}</>;
// }

// export default User;

import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersStore } from '../store/Users.Store';
import UserCard from './UserCard';

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

  return <>{user ? <UserCard user={user}></UserCard> : <p>null</p>}</>;
}

export default User;
