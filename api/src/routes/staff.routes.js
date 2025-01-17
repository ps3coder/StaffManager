import express from "express";
import {
  AddStaff,
  DeleteStaff,
  getAllStaff,
  getStaffById,
  UpdateStaff,
} from "../controllers/staff.controller.js";

const router = express.Router();

router.post("/add", AddStaff);
router.get("/:id", getStaffById);
router.get("/", getAllStaff);
router.put("/:id", UpdateStaff);
router.delete("/:id", DeleteStaff);

export default router;
