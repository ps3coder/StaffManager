import React from 'react'


const DepartmenList = ({ departmentList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Department List</h1>
            <ul>
                {departmentList.map((department) => (
                    <li key={department.id}>
                        <p>
                            <strong>
                                {department.name}
                            </strong>
                        </p>
                        <p>Department Id :{department.id}</p>
                        <p>Description:{department.description}</p>
                        <p>Employees:{department.number_of_employees}</p>
                        <p>Created At: {department.created_at}</p>
                        <p>Updated At: {department.updated_at}</p>
                        <button onClick={() => handleEdit(department)}>Edit</button>
                        <button onClick={() => handleDelete(department.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DepartmenList