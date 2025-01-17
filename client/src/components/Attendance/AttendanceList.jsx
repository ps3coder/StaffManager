import React from "react";

const AttendanceList = ({ attendanceList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Attendance List</h1>
            <ul>
                {attendanceList.map((attendance) => (
                    <li key={attendance.id}>
                        <p><strong>Staff ID:</strong> {attendance.staff_id}</p>
                        <p><strong>Date:</strong> {attendance.date}</p>
                        <p><strong>Check-In:</strong> {attendance.check_in_time}</p>
                        <p><strong>Check-Out:</strong> {attendance.check_out_time}</p>
                        <p><strong>Hours Worked:</strong> {attendance.hours_worked}</p>
                        <p><strong>Status:</strong> {attendance.status}</p>
                        <p><strong>Remarks:</strong> {attendance.remarks}</p>
                        <button onClick={() => handleEdit(attendance)}>Edit</button>
                        <button onClick={() => handleDelete(attendance.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;
