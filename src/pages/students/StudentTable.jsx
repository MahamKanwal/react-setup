// import TableRow from "./TableRow";
// import { useUsers } from "../../contexts/UserContext";
// const TableData = () => {
//   const { users } = useUsers();
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <TableRow key={user.id} user={user} />
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default TableData;

import { useStudents } from "../../contexts/StudentContext";
import DynamicTable from "../../components/DynamicTable";

const StudentTable = () => {
  const { students } = useStudents();
  const studentTableColumns = ["name", "email", "roll_no", "course"];
  return <DynamicTable columns={studentTableColumns} data={students} />;
};

export default StudentTable;
