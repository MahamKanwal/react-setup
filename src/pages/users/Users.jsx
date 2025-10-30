import { NavLink, Outlet } from "react-router-dom";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <div className="mt-4 space-y-4">
      <NavLink
        to="/users/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Users
      </NavLink>
      <UserTable />
      <Outlet />
    </div>
  );
};

export default Users;
