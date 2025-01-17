import React, { useState, useEffect } from 'react';
import apiRequest from "../../lib/apiRequest";
import RolePage from '../../components/RolePage/RolePage'
import RoleList from '../../components/RolePage/RoleList'

const Role = () => {
    const [roleList, setRoleList] = useState([]);
    const [error, setError] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});


    const fetchRoles = async (req, res) => {
        try {
            const response = await apiRequest.get('/role');
            setRoleList(response.data);
        } catch (error) {
            setError("Failed to fetch Role list");
        }
    }

    useEffect(() => {
        fetchRoles();
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedValue = name === "created_at"
            ? (value ? new Date(value).toISOString() : new Date().toISOString())
            :
            name === "permissions"
                ? value === "true"
                : value;

        setFormState({ ...formState, [name]: updatedValue });
    };


    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState)

        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`role/${formState.id}`, updatedData)
                console.log(formState)
                setIsEditing(false);
            } else {
                await apiRequest.post("/role/add", formState);
                console.log(formState)
            }
        } catch (error) {
            setError("Failed to save Role details")
        }
    }
    const handleEdit = (role) => {
        // console.log("Edit role:", role);
        setFormState(role);
        setIsEditing(true);
    }
    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/role/${id}`);
            fetchRoles();
        } catch (error) {
            setError("Failed to delete Role")
        }
    }
    return (
        <div>
            <div className="role">
                {error && <p style={{ color: "red" }}>{error}</p>}

                <RolePage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    setFormState={setFormState}
                    handleAddOrUpdate={handleAddOrUpdate}
                />
            </div>
            <RoleList
                roleList={roleList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Role