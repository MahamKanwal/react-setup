import React, { useEffect, useState } from "react";
import { useStudents } from "../contexts/StudentContext";

const StudentForm = () => {
    const { addAndUpdateStudent, editStudent } = useStudents();
    const [stdObj, setStdObj] = useState({ name: "", email: "" });


    const handleSubmit = (e) => {
        e.preventDefault();
        addAndUpdateStudent(stdObj);
        setStdObj({ name: "", email: "" });
    };

    const handleChange = ({ target: { name, value } }) => {
        setStdObj({ ...stdObj, [name]: value });
    };

    useEffect(() => {
        if (editStudent) {
            setStdObj(editStudent);
        }
    }, [editStudent])



    return (
        <div className="max-w-md mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                ✨ Add New Student
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-gray-700 font-medium tracking-wide"
                    >
                        Full Name
                    </label>
                    <input
                        name="name"
                        value={stdObj.name}
                        onChange={handleChange}
                        type="text"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                        placeholder="e.g. John Doe"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-gray-700 font-medium tracking-wide"
                    >
                        Email Address
                    </label>
                    <input
                        name="email"
                        value={stdObj.email}
                        onChange={handleChange}
                        type="email"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                        placeholder="e.g. john@example.com"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                    ➕ {editStudent ? "Update" : "Add"} Student
                </button>


            </form>
        </div>
    );
};

export default StudentForm;
