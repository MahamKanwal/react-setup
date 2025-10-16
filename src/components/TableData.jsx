import TableRow from './TableRow'
import { useStudents } from '../contexts/StudentContext';

const TableData = () => {
    const {students} = useStudents();

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
                        <TableRow key={std.id} std={std} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableData
