import React from "react";

const List = ({ users, onClick, activeId }) => {
  const itemClass = (id) => {
    if (id === activeId) {
      return "list-group-item active";
    }

    return "list-group-item";
  };

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          className={itemClass(user.id)}
          key={user.id}
          onClick={() => onClick(user.id)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
