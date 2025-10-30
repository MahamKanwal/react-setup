// import { useUsers } from "../../contexts/UserContext";
// const TableRow = ({ user }) => {
//   const { name, email, id } = user;
//   const { handleDeleteUser, editUserFn } = useUsers();

//   const hanleDelete = () => {
//     handleDeleteUser(id);
//   };
//   const handleEdit = () => {
//     editUserFn(user);
//   };
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{email}</td>
//       <td className="space-x-3">
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={hanleDelete}>delete</button>
//       </td>
//     </tr>
//   );
// };
// export default TableRow;

import { NavLink, Outlet } from "react-router-dom";
import StudentTable from "./StudentTable";

const Students = () => {
  return (
    <div className="mt-4 space-y-4">
      <NavLink
        to="/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Students
      </NavLink>
      <StudentTable />
      <Outlet />
    </div>
  );
};

export default Students;
