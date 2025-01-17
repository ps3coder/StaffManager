import React, { useState, useEffect } from 'react';
import apiRequest from "../../lib/apiRequest";
import DepartmenList from '../../components/DepartmenPage/DepartmenList';
import DepartmentPage from '../../components/DepartmenPage/DepartmentPage';


const Department = () => {
    const [departmentList, setDepartmentList] = useState([]);
    const [error, setError] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});


    const fetchDepartment = async (req, res) => {
        try {
            const response = await apiRequest.get('/department');
            setDepartmentList(response.data);
        } catch (error) {
            setError("Failed to fetch Department list");
        }
    }

    useEffect(() => {
        fetchDepartment();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: name === "number_of_employees" ? Number(value) : name === "created_at" ? new Date(value).toISOString() : value,
        })
    }
    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState)
        try {
            if (isEditing) {
                // console.log(formState);
                const { id, ...updatedData } = formState;
                await apiRequest.put(`department/${formState.id}`, updatedData)
                setIsEditing(false);
            } else {
                await apiRequest.post("/department/add", formState);
                console.log(formState)
            }
        } catch (error) {
            setError("Failed to save Department details")
        }
    }

    const handleEdit = (department) => {
        setFormState(department);
        setIsEditing(true);
    }
    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/department/${id}`);
            fetchDepartment();
        } catch (error) {
            setError("Failed to delete Department")
        }
    }
    return (
        <div>
            <div className="department">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <DepartmentPage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    handleAddOrUpdate={handleAddOrUpdate}
                    setFormState={setFormState}
                />
            </div>
            <DepartmenList
                departmentList={departmentList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Department