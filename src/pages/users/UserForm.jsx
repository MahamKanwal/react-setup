// import React, { useEffect, useState } from "react";
// import { useUsers } from "../contexts/UserContext";

// const UserForm = () => {
//   const { addAndUpdateUser, editUser } = useUsers();
//   const [userObj, setUserObj] = useState({ name: "", email: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addAndUpdateUser(userObj);
//     setUserObj({ name: "", email: "" });
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     setUserObj({ ...userObj, [name]: value });
//   };

//   useEffect(() => {
//     if (editUser) {
//       setUserObj(editUser);
//     }
//   }, [editUser]);

//   return (
//     <div className="max-w-md mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//         ✨ Add New User
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="flex flex-col gap-2">
//           <label
//             htmlFor="name"
//             className="text-gray-700 font-medium tracking-wide"
//           >
//             Full Name
//           </label>
//           <input
//             name="name"
//             value={userObj.name}
//             onChange={handleChange}
//             type="text"
//             required
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//             placeholder="e.g. John Doe"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label
//             htmlFor="email"
//             className="text-gray-700 font-medium tracking-wide"
//           >
//             Email Address
//           </label>
//           <input
//             name="email"
//             value={userObj.email}
//             onChange={handleChange}
//             type="email"
//             required
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//             placeholder="e.g. john@example.com"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
//         >
//           ➕ {editUser ? "Update" : "Add"} User
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;

import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCity, FaUser } from "react-icons/fa";
import { useUsers } from "../../contexts/UserContext";
import Drawer from "../../components/Drawer";
import FormGenerator from "../../components/FormGenerator";

const UserForm = () => {
  const [user, setUser] = useState({
    user_name: "",
    contact_number: "",
    email: "",
    city: "",
  });

  const { addAndUpdateUser } = useUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAndUpdateUser(user);
  };

  const userFormFields = [
    { name: "user_name", icon: <FaUser className="text-blue-500"/>, required: true },
    {
      name: "contact_number",
      icon: <IoMdCall className="text-red-500"/>,
      type: "number",
      required: true,
    },
    { name: "email", icon: <MdEmail className="text-green-500"/>, type: "email", required: true },
    {
      name: "city",
      icon: <FaCity className="text-yellow-500"/>,
      type: "select",
      required: true,
      options: ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"],
    },
  ];

  return (
    <>
      <Drawer title="Add User">
        <FormGenerator
          fields={userFormFields}
          onSubmit={handleSubmit}
          values={user}
          setValues={setUser}
        ></FormGenerator>
      </Drawer>
    </>
  );
};

export default UserForm;


