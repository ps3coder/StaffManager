import React from "react";

const LeaveList = ({ leaveList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Leave List</h1>
            <ul>
                {leaveList.map((leave) => (
                    <li key={leave.id}>
                        <p><strong>Staff ID:</strong> {leave.staff_id}</p>
                        <p><strong>Leave Type:</strong> {leave.leave_type}</p>
                        <p><strong>Start Date:</strong> {leave.start_date}</p>
                        <p><strong>End Date:</strong> {leave.end_date}</p>
                        <p><strong>Total Days:</strong> {leave.total_days}</p>
                        <p><strong>Status:</strong> {leave.status}</p>
                        <p><strong>Reason:</strong> {leave.reason}</p>
                        <p><strong>Created At:</strong> {leave.created_at}</p>
                        <p><strong>Updated At:</strong> {leave.updated_at}</p>
                        <button onClick={() => handleEdit(leave)}>Edit</button>
                        <button onClick={() => handleDelete(leave.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaveList;
