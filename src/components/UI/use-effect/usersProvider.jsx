import React, { useState, useContext, useEffect } from "react";

const UsersContext = React.createContext();

export const useUser = () => {
  return useContext(UsersContext).user;
};

export const useUsers = () => {
  return useContext(UsersContext).users;
};

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const [user, setUser] = useState();
  const [isUserLoading, setIsUserLoading] = useState(true);

  const [userId, setUserId] = useState();

  useEffect(() => {
    setIsUsersLoading(true);
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsUsersLoading(false);
      });
  }, []);

  useEffect(() => {
    if (userId === undefined) {
      return;
    }

    setIsUserLoading(true);
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsUserLoading(false);
      });
  }, [userId]);

  const getUser = (id) => {
    setUserId(id);
    return user;
  };

  const contextValue = {
    user: {
      getUser,
      isUserLoading,
    },
    users: {
      users,
      isUsersLoading,
    },
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
