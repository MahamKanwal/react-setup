import { useUsers } from "../../contexts/UserContext";
import DynamicTable from "../../components/DynamicTable";

const UserTable = () => {
  const { users } = useUsers();
  const userTableColumns = ["name", "email", "contact_number", "city"];
  return <DynamicTable columns={userTableColumns} data={users} />;
};

export default UserTable;
