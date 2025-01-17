import React from 'react'

const LeavePage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="leave-form">
                <div>
                    <label>Staff ID:</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={formState.staff_id || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Leave Type:</label>
                    <input
                        type="text"
                        name="leave_type"
                        value={formState.leave_type || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="start_date"
                        value={
                            formState.start_date
                                ? new Date(formState.start_date).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="end_date"
                        value={
                            formState.end_date
                                ? new Date(formState.end_date).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Total Days:</label>
                    <input
                        type="number"
                        name="total_days"
                        value={formState.total_days || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formState.status || ""}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="REJECTED">Rejected</option>
                    </select>
                </div>
                <div>
                    <label>Reason:</label>
                    <textarea
                        name="reason"
                        value={formState.reason || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Created At:</label>
                    <input
                        type="date"
                        name="created_at"
                        value={
                            formState.created_at
                                ? new Date(formState.created_at).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Updated At:</label>
                    <input
                        type="date"
                        name="updated_at"
                        value={
                            formState.updated_at
                                ? new Date(formState.updated_at).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? "Update" : "Add"} Leave</button>
            </form>
        </div>
    )
}

export default LeavePage