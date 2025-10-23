import React from 'react'
import UserForm from "../components/UserForm";
import TableData from "../components/TableData";

const Users = () => {
  return (
       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)]">
                <UserForm />
                <TableData />
              </div>
  )
}

export default Users
