import React, { useState } from "react";
import Details from "./details";
import List from "./list";
import { useUser, useUsers } from "./usersProvider";
import withLoading from "./withLoading";

const Users = () => {
  const [selectedUserId, setSelectedUserId] = useState();

  const { users, isUsersLoading } = useUsers();
  const { getUser, isUserLoading } = useUser();

  const user = getUser(selectedUserId);

  const handleUserClick = (id) => {
    setSelectedUserId(id);
  };

  const UserList = withLoading(List, isUsersLoading);
  const UserDetails = withLoading(Details, isUserLoading);

  return (
    <div className="d-flex flex-row w-100">
      <div className="mx-3">
        <UserList
          users={users}
          onClick={handleUserClick}
          activeId={selectedUserId}
        ></UserList>{" "}
      </div>

      <UserDetails user={user}></UserDetails>
    </div>
  );
};

export default Users;
