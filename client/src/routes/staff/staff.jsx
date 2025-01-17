import React, { useState, useEffect } from 'react';
import apiRequest from "../../lib/apiRequest";
import StaffPage from '../../components/StaffPage/StaffPage';
import StaffList from '../../components/StaffPage/StaffList';

const Staff = () => {
    const [staffList, setStaffList] = useState([]);
    const [error, setError] = useState("");
    const [formState, setFormState] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchStaff = async () => {
        try {
            const response = await apiRequest.get('/staff');
            setStaffList(response.data);
        } catch (err) {
            setError("Failed to fetch staff list");
        }
    };

    useEffect(() => {
        fetchStaff();
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
        // console.log("object", formState)
    }
    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                console.log(formState)
                const { id, ...updatedData } = formState;
                console.log(updatedData)
                await apiRequest.put(`/staff/${formState.id}`, updatedData)
                setIsEditing(false);
            } else {
                console.log(formState)
                await apiRequest.post("/staff/add", formState);
            }
            setFormState({})
            fetchStaff();
        } catch (error) {
            setError("Failed to save staff details")
        }
    }
    const handleEdit = (staff) => {
        setFormState(staff);
        setIsEditing(true);
    }
    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/staff/${id}`);
            fetchStaff();
        } catch (error) {
            setError("Failed to delete staff")
        }
    }

    return (
        <div>
            <div className="staff">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <StaffPage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    handleAddOrUpdate={handleAddOrUpdate}
                    setFormState={setFormState}
                />
            </div>
            <StaffList
                staffList={staffList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Staff;
