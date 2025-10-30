import React from "react";
import { useUsers } from "../contexts/UserContext";

const TableRow = ({ user }) => {
  const { name, email, id } = user;
  const { handleDeleteUser, editUserFn } = useUsers();

  const hanleDelete = () => {
    handleDeleteUser(id);
  };
  const handleEdit = () => {
    editUserFn(user);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td className="space-x-3">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={hanleDelete}>delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
