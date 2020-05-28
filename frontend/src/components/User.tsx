import React from "react";
import "./style.css";

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const User: React.FC<IProps> = ({ user }) => {
  return (
    <div className="line">
      <strong>Name: </strong> {user.name} <br />
      <strong>Mail: </strong> {user.email} <br />
    </div>
  );
};

export default User;
