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
    { name: "user_name", icon: <FaUser />, required: true },
    {
      name: "contact_number",
      icon: <IoMdCall />,
      type: "number",
      required: true,
    },
    { name: "email", icon: <MdEmail />, type: "email", required: true },
    {
      name: "city",
      icon: <FaCity />,
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
