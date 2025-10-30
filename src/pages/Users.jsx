import { NavLink, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="mt-4">
      {/* <TableData/> */}
      <NavLink
        to="/create"   
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Users
      </NavLink>
        <Outlet />
    </div>
  );
};

export default Users;



