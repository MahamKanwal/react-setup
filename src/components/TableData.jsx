import React, { useState } from 'react'
import TableRow from './TableRow'
const stds = [
    {
        id: 1,
        name: "ali",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "ahmed",
        email: "ahmed@gmail.com"
    },
    {
        id: 3,
        name: "alina",
        email: "alina@gmail.com"
    },
]

const TableData = () => {
    const [students, setStudents] = useState(stds);

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter(std => std.id != id)
        setStudents(updatedStudents);
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    students.map(std => (
                        <TableRow key={std.id} {...std} handleDeleteStudent={handleDeleteStudent} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableData
