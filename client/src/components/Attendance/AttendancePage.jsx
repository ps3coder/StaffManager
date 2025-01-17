import React from 'react'

const AttendancePage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="attendance-form">
                <div>
                    <label htmlFor="">Staff ID:</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={formState.staff_id || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formState.date || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Check-In Time:</label>
                    <input
                        type="time"
                        name="check_in_time"
                        value={formState.check_in_time || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Check-Out Time:</label>
                    <input
                        type="time"
                        name="check_out_time"
                        value={formState.check_out_time || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Hours Worked:</label>
                    <input
                        type="number"
                        name="hours_worked"
                        value={formState.hours_worked}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Status:</label>
                    <select
                        name="status"
                        value={formState.status || ""}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Status</option>
                        <option value="PRESENT">Present</option>
                        <option value="ABSENT">Absent</option>
                        <option value="ON_LEAVE">On Leave</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Remarks:</label>
                    <textarea
                        name="remarks"
                        value={formState.remarks || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">{isEditing ? "Update" : "Add"} Attendance</button>

            </form>
        </div>
    )
}

export default AttendancePage