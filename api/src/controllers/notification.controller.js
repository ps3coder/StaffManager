import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addNotification = async (req, res) => {
  const requiredFields = [
    "staff_id",
    "title",
    "message",
    "type",
    "status",
    "created_at",
    "updated_at",
  ];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newNotification = await prisma.notifications.create({
      data: req.body,
    });
    return res.status(201).json(newNotification);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Notification" });
  }
};

export const getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await prisma.notifications.findUnique({
      where: { id },
    });
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.status(200).json(notification);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Notification" });
  }
};

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notifications.findMany();
    return res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Notifications" });
  }
};

export const updateNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNotification = await prisma.notifications.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedNotification);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.status(500).json({ message: "Error updating Notification" });
  }
};

export const deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.notifications.delete({
      where: { id },
    });
    return res
      .status(200)
      .json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.status(500).json({ message: "Error deleting Notification" });
  }
};
