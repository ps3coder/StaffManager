import React from "react";

const RoleList = ({ roleList, handleEdit, handleDelete }) => {
    return <div>
        <h1>Role List</h1>
        <ul>
            {roleList.map((role) => (
                <li key={role.id}>
                    <p>
                        <strong>
                            {role.name}
                        </strong>
                    </p>
                    <p>Permissions : {role.permissions == true ? "Available" : "Not Available"}</p>
                    <p>Description : {role.description}</p>
                    <p>Role Id : {role.id}</p>
                    <p>Salary Range :{role.salary_range}</p>
                    <p>Created At : {role.created_at}</p>
                    <p>Updated At : {role.updated_at}</p>
                    <button onClick={() => handleEdit(role)}>Edit</button>
                    <button onClick={() => handleDelete(role.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>;
};

export default RoleList;
