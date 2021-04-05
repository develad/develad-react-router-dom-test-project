import React, { useState, useEffect } from 'react';

const UsersStore = React.createContext();
const { Provider } = UsersStore;

const UsersStoreProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const fetchUsers = async () => {
    const res = await fetch('https://randomuser.me/api/?results=10');
    const data = await res.json();
    console.log(data.results);
    setUsers(data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const state = {
    users,
  };

  return <Provider value={{ ...state }}>{children}</Provider>;
  //   return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { UsersStoreProvider, UsersStore };
