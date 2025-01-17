import express from "express";
import {
  addLeave,
  deleteLeave,
  getAllLeaves,
  getLeaveById,
  updateLeave,
} from "../controllers/leave.controller.js";

const router = express.Router();

router.post("/add", addLeave);
router.get("/:id", getLeaveById);
router.get("/", getAllLeaves);
router.put("/:id", updateLeave);
router.delete("/:id", deleteLeave);

export default router;
