import express from "express";
import {
  AddAttendence,
  DeleteAttendence,
  getAllAttendence,
  getAttendenceById,
  UpdateAttendence,
} from "../controllers/attendence.controller.js";

const router = express.Router();

router.post("/add", AddAttendence);
router.get("/:id", getAttendenceById);
router.get("/", getAllAttendence);
router.put("/:id", UpdateAttendence);
router.delete("/:id", DeleteAttendence);

export default router;
