import React from "react";

const PerformanceList = ({ performanceList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Performance List</h1>
            <ul>
                {performanceList.map((performance) => (
                    <li key={performance.id}>
                        <p><strong>Staff Id:</strong> {performance.staff_id}</p>
                        <p><strong>Review Period:</strong> {performance.review_period}</p>
                        <p>
                            <strong>Ratings : </strong>{performance.ratings || "N/A"}
                        </p>
                        <p><strong>Recommendations:</strong> {performance.recommendations}</p>
                        <p><strong>Created At:</strong> {performance.created_at}</p>
                        <p><strong>Updated At:</strong> {performance.updated_at}</p>
                        <button onClick={() => handleEdit(performance)}>Edit</button>
                        <button onClick={() => handleDelete(performance.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerformanceList;
