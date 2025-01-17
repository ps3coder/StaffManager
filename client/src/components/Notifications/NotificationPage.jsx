import React from "react";

const NotificationsPage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="notifications-form">
                <div>
                    <label htmlFor="staff_id">Staff Id:</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={formState.staff_id || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formState.title || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        value={formState.message || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select
                        name="type"
                        value={formState.type || ""}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Notification Type</option>
                        <option value="INFO">Info</option>
                        <option value="WARNING">Warning</option>
                        <option value="ERROR">Error</option>
                        <option value="SUCCESS">Success</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={formState.status || ""}
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
                <button type="submit">
                    {isEditing ? "Update Notification" : "Add Notification"}
                </button>
            </form>
        </div>
    );
};

export default NotificationsPage;
