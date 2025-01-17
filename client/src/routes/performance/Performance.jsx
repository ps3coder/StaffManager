import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import PerformancePage from "../../components/Performance/PerformancePage";
import PerformanceList from "../../components/Performance/PerformanceList";

const Performance = () => {
    const [performanceList, setPerformanceList] = useState([]);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});

    const fetchPerformanceRecords = async () => {
        try {
            const response = await apiRequest.get("/performance");
            setPerformanceList(response.data);
        } catch (error) {
            setError("Failed to fetch performance records");
        }
    };

    useEffect(() => {
        fetchPerformanceRecords();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedValue =
            name === "ratings"
                ? parseInt(value, 10) || 0
                : name === "created_at" || name === "updated_at"
                    ? value
                        ? new Date(value).toISOString()
                        : null
                    : value;
        setFormState({ ...formState, [name]: updatedValue });
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState)
        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`/performance/${formState.id}`, updatedData);
                setIsEditing(false);
            } else {
                await apiRequest.post("/performance/add", formState);
            }
            fetchPerformanceRecords();
        } catch (error) {
            setError("Failed to save performance record");
        }
    };

    const handleEdit = (performance) => {
        setFormState(performance);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/performance/${id}`);
            fetchPerformanceRecords();
        } catch (error) {
            setError("Failed to delete performance record");
        }
    };
    return (
        <div>
            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <PerformancePage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    setFormState={setFormState}
                    handleAddOrUpdate={handleAddOrUpdate}
                />
            </div>
            <PerformanceList
                performanceList={performanceList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Performance;
