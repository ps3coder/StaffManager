import express from "express";
import {
  addNotification,
  deleteNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/add", addNotification);
router.get("/:id", getNotificationById);
router.get("/", getAllNotifications);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

export default router;
