import React from 'react'
import './StaffPage.css'

const StaffPage = ({ formState, isEditing, handleInputChange, handleAddOrUpdate, setFormState }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="staff-form">
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formState.first_name || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formState.last_name || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formState.email || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={formState.phone_number || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formState.gender || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formState.date_of_birth || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={formState.address?.street || ""}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                address: { ...formState.address, street: e.target.value },
                            })
                        }
                        placeholder="Street, City, State, Zip, Country"
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        name="role"
                        value={formState.role || ""}
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
                    <label>Employment Type:</label>
                    <select
                        name="employment_type"
                        value={formState.employment_type || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div>
                    <label>Date of Joining:</label>
                    <input
                        type="date"
                        name="date_of_joining"
                        value={formState.date_of_joining || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Salary:</label>
                    <textarea
                        name="salary_details"
                        value={formState.salary_details?.base_salary || "100000"}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                salary_details: {
                                    ...formState.salary_details,
                                    base_salary: e.target.value
                                },
                            })
                        }
                        placeholder="base_salary, currency, benefits"
                    />
                </div>
                <div>
                    <label>Reporting Manager ID:</label>
                    <input
                        type="text"
                        name="reporting_manager_id"
                        value={formState.reporting_manager_id || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formState.status || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                        <option value="SUSPENDED">Suspended</option>
                        <option value="ON_LEAVE">On Leave</option>
                        <option value="ON_TRAINING">On Training</option>
                        <option value="TERMINATED">Terminated</option>
                    </select>
                </div>
                <div>
                    <label>Profile Picture URL:</label>
                    <input
                        type="url"
                        name="profile_picture"
                        value={formState.profile_picture || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Department ID:</label>
                    <input
                        type="text"
                        name="department_id"
                        value={formState.department_id || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Resume URL:</label>
                    <input
                        type="url"
                        name="documents.resume"
                        value={formState.documents?.resume || ""}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                documents: { ...formState.documents, resume: e.target.value },
                            })
                        }
                    />
                </div>
                <div>
                    <label>Offer Letter URL:</label>
                    <input
                        type="url"
                        name="documents.offer_letter"
                        value={formState.documents?.offer_letter || ""}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                documents: { ...formState.documents, offer_letter: e.target.value },
                            })
                        }
                    />
                </div>
                <button type="submit">{isEditing ? "Update" : "Add"} Staff</button>
            </form>
        </div>
    )
}

export default StaffPage
