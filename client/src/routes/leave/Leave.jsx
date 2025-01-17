import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import LeaveList from '../../components/Leave/LeaveList'
import LeavePage from '../../components/Leave/LeavePage'

const Leave = () => {
    const [leaveList, setLeaveList] = useState([]);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});
    const fetchLeaves = async () => {
        try {
            const response = await apiRequest.get("/leave");
            setLeaveList(response.data);
        } catch (error) {
            setError("Failed to fetch Leave records");
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue =
            name === "total_days"
                ? parseInt(value, 10) || 0
                : name === "start_date" || name === "end_date" || name === "created_at" || name === "updated_at"
                    ? value
                        ? new Date(value).toISOString()
                        : ""
                    : value;

        setFormState({ ...formState, [name]: updatedValue });
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState)
        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`/leave/${formState.id}`, updatedData);
                setIsEditing(false);
            } else {
                await apiRequest.post("/leave/add", formState);
            }
            fetchLeaves();
        } catch (error) {
            console.log(error)
            setError("Failed to save Leave record");
        }
    };

    const handleEdit = (leave) => {
        setFormState(leave);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/leave/${id}`);
            fetchLeaves();
        } catch (error) {
            setError("Failed to delete Leave record");
        }
    };


    return (
        <div>
            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <LeavePage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    handleAddOrUpdate={handleAddOrUpdate} />
            </div>

            <LeaveList
                leaveList={leaveList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Leave