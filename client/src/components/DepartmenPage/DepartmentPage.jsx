import React from 'react'

const DepartmentPage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="department-form">
                <div>
                    <label>Department Name:</label>
                    <select
                        name="name"
                        value={formState.name || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Department</option>
                        {[
                            "HR", "IT", "FINANCE", "MARKETING", "SALES", "OPERATIONS",
                            "CUSTOMER_SERVICE", "ENGINEER", "DESIGN", "PRODUCTION", "RESEARCH_DEVELOPMENT",
                            "LOGISTICS", "SUPPORT", "QUALITY_ASSURANCE", "ADMINISTRATION", "MARKETING_COMMUNICATION",
                            "LEGAL", "FINANCE_ACCOUNTING", "CUSTOMER", "TECHNICAL", "PRODUCTION_MANAGEMENT"
                        ].map((dept) => (
                            <option value={dept} key={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Department Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formState.description || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Number Of Employees:</label>
                    <input
                        type="number"
                        name="number_of_employees"
                        value={formState.number_of_employees || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Date of Created:</label>
                    <input
                        type="datetime-local"
                        name="created_at"
                        value={
                            formState.created_at
                                ? new Date(formState.created_at).toISOString().slice(0, -1)
                                : ""
                        }
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit'>{isEditing ? "Update" : "Add"} Department</button>
            </form>
        </div>
    )
}

export default DepartmentPage