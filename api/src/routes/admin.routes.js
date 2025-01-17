import express from "express";
import {
  AddAdmin,
  DeleteAdmin,
  getAdminById,
  getAllAdmin,
  UpdateAdmin,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/add", AddAdmin);
router.get("/:id", getAdminById);
router.get("/", getAllAdmin);
router.put("/:id", UpdateAdmin);
router.delete("/:id", DeleteAdmin);

export default router;
