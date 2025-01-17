import React from 'react'

const RolePage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form action="" onSubmit={handleAddOrUpdate} className="role-form" >
                <div>
                    <label htmlFor="">Role Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Role Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formState.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Role Salaray Range:</label>
                    <input
                        type="text"
                        name="salary_range"
                        value={formState.salary_range}
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
                                ? new Date(formState.created_at).toISOString().slice(0, 16)
                                : ""
                        }
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Permissions:</label>
                    <select
                        name="permissions"
                        value={formState.permissions === true ? "true" : "false"}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Status</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>


                <button type='submit'>{isEditing ? "Update" : "Add"} Department</button>
            </form >
        </div >
    )
}

export default RolePage