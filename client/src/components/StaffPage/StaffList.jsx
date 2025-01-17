import React from 'react'
import './StaffPage.css'

const StaffList = ({ staffList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Staff List</h1>
            <ul>
                {staffList.map((staff) => (
                    <li key={staff.id}>
                        <p>
                            <strong>
                                {staff.first_name} {staff.last_name}
                            </strong>{" "}
                            ({staff.role})
                        </p>
                        <p>Email: {staff.email}</p>
                        <p>Phone: {staff.phone_number}</p>
                        <p>Gender: {staff.gender}</p>
                        <p>Address: {`${staff.address.street}, ${staff.address.city}, ${staff.address.state}, ${staff.address.zip_code}, ${staff.address.country}`}</p>
                        <p>Department ID: {staff.department_id}</p>
                        <p>Employment Type: {staff.employment_type}</p>
                        <p>Date of Joining: {staff.date_of_joining}</p>
                        <p>Reporting Manager ID: {staff.reporting_manager_id}</p>
                        <p>Status: {staff.status}</p>
                        <p>
                            Profile Picture:{" "}
                            <a href={staff.profile_picture} target="_blank" rel="noopener noreferrer">
                                View Picture
                            </a>
                        </p>
                        <p>Documents:</p>
                        <ul>
                            <li>
                                Resume:{" "}
                                <a href={staff.documents.resume} target="_blank" rel="noopener noreferrer">
                                    View Resume
                                </a>
                            </li>
                            <li>
                                Offer Letter:{" "}
                                <a href={staff.documents.offer_letter} target="_blank" rel="noopener noreferrer">
                                    View Offer Letter
                                </a>
                            </li>
                        </ul>
                        <p>Created At: {staff.created_at}</p>
                        <p>Updated At: {staff.updated_at}</p>
                        <button onClick={() => handleEdit(staff)}>Edit</button>
                        <button onClick={() => handleDelete(staff.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StaffList
