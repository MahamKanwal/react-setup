import React from 'react'
import { useStudents } from '../contexts/StudentContext';

const TableRow = ({ name, email, id }) => {
    const { handleDeleteStudent } = useStudents();

    const hanleDelete = () => {
        handleDeleteStudent(id)
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={hanleDelete}>delete</button></td>
        </tr>
    )
}

export default TableRow
