import React from 'react'

const TableRow = ({ name, email, id, handleDeleteStudent }) => {

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
