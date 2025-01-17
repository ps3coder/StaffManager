import express from "express";
import {
  AddRole,
  DeleteRole,
  getAllRoles,
  getRoleById,
  UpdateRole,
} from "../controllers/role.controller.js";

const router = express.Router();

router.post("/add", AddRole);
router.get("/:id", getRoleById);
router.get("/", getAllRoles);
router.put("/:id", UpdateRole);
router.delete("/:id", DeleteRole);

export default router;
