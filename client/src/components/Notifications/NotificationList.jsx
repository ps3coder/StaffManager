import React from "react";

const NotificationsList = ({ notificationsList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Notifications List</h1>
            <ul>
                {notificationsList.map((notification) => (
                    <li key={notification.id}>
                        <p>
                            <strong>Title:</strong> {notification.title}
                        </p>
                        <p>
                            <strong>Staff Id:</strong> {notification.staff_id}
                        </p>
                        <p>
                            <strong>Message:</strong> {notification.message}
                        </p>
                        <p>
                            <strong>Type:</strong> {notification.type}
                        </p>
                        <p>
                            <strong>Status:</strong> {notification.status}
                        </p>
                        <p>
                            <strong>Created At:</strong> {notification.created_at}
                        </p>
                        <p>
                            <strong>Updated At:</strong> {notification.updated_at}
                        </p>
                        <button onClick={() => handleEdit(notification)}>Edit</button>
                        <button onClick={() => handleDelete(notification.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsList;
