import React from "react";

const Details = ({ user }) => {
  return (
    <div>
      <img alt="" src={user.avatar} className="w-100" />

      <ul className="list-group">
        <li className="list-group-item">{user.name}</li>
        <li className="list-group-item">City: {user.details.city}</li>
        <li className="list-group-item">Company: {user.details.company}</li>
        <li className="list-group-item">Position: {user.details.position}</li>
      </ul>
    </div>
  );
};

export default Details;
