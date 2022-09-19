import React from "react";
import Users from "./users";
import UsersProvider from "./usersProvider";

const UseEffectApp = () => {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
};

export default UseEffectApp;
