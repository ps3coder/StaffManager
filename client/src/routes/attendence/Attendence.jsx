import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import AttendanceList from '../../components/Attendance/AttendanceList';
import AttendancePage from "../../components/Attendance/AttendancePage";

const Attendence = () => {
    const [attendanceList, setAttendanceList] = useState([]);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});


    const fetchAttendance = async () => {
        try {
            const response = await apiRequest.get("/att");
            setAttendanceList(response.data);
        } catch (error) {
            setError("Failed to fetch Attendance records");
        }
    };
    useEffect(() => {
        fetchAttendance();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedValue = name === "hours_worked"
            ? parseInt(value, 10) || 0
            : value;

        setFormState({ ...formState, [name]: updatedValue });
    };


    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`/att/${formState.id}`, updatedData);
                setIsEditing(false);
            } else {
                await apiRequest.post("/att/add", formState);
            }
            fetchAttendance();
        } catch (error) {
            setError("Failed to save Attendance record");
        }
    };
    const handleEdit = (attendance) => {
        setFormState(attendance);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/att/${id}`);
            fetchAttendance();
        } catch (error) {
            setError("Failed to delete Attendance record");
        }
    };

    return (
        <div>
            <div className="attendance">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <AttendancePage
                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    handleAddOrUpdate={handleAddOrUpdate}
                />
            </div>
            <AttendanceList
                attendanceList={attendanceList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Attendence