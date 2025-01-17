import express from "express";
import {
  AddDepartment,
  DeleteDepartment,
  getAllDepartments,
  getDepartmentById,
  UpdateDepartment,
} from "../controllers/department.controller.js";

const router = express.Router();

router.post("/add", AddDepartment);
router.get("/:id", getDepartmentById);
router.get("/", getAllDepartments);
router.put("/:id", UpdateDepartment);
router.delete("/:id", DeleteDepartment);

export default router;
