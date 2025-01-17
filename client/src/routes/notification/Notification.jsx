import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import NotificationPage from "../../components/Notifications/NotificationPage";
import NotificationList from "../../components/Notifications/NotificationList";

const Notification = () => {
    const [notificationsList, setNotificationsList] = useState([]);
    const [formState, setFormState] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");

    const fetchNotifications = async () => {
        try {
            const response = await apiRequest.get("/noti");
            setNotificationsList(response.data);
        } catch (error) {
            setError("Failed to fetch notifications list.");
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue =
            name === "created_at" || name === "updated_at"
                ? value ? new Date(value).toISOString() : new Date().toISOString()
                : value;
        setFormState({ ...formState, [name]: updatedValue });
    };

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState);
        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`/noti/${id}`, updatedData);
                setIsEditing(false);
            } else {
                await apiRequest.post("/noti/add", formState);
            }
            fetchNotifications();
        } catch (error) {
            setError("Failed to save notification details.");
        }
    };

    const handleEdit = (notification) => {
        setFormState(notification);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/noti/${id}`);
            fetchNotifications();
        } catch (error) {
            setError("Failed to delete notification.");
        }
    };



    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <NotificationPage
                    formState={formState}
                    handleInputChange={handleInputChange}
                    handleAddOrUpdate={handleAddOrUpdate}
                    isEditing={isEditing}
                />
            </div>
            <NotificationList
                notificationsList={notificationsList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Notification;
