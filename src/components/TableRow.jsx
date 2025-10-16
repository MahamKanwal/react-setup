import React from 'react'
import { useStudents } from '../contexts/StudentContext';

const TableRow = ({ std }) => {
    const { name, email, id } = std;
    const { handleDeleteStudent, editStudentFn } = useStudents();

    const hanleDelete = () => {
        handleDeleteStudent(id)
    }
    const handleEdit = () => {
        editStudentFn(std);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td className='space-x-3'>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={hanleDelete}>delete</button>
            </td>
        </tr>
    )
}

export default TableRow
