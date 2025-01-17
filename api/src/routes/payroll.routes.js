import express from "express";
import {
  addPayroll,
  deletePayroll,
  getAllPayrolls,
  getPayrollById,
  updatePayroll,
} from "../controllers/payroll.controller.js";

const router = express.Router();

router.post("/add", addPayroll);
router.get("/:id", getPayrollById);
router.get("/", getAllPayrolls);
router.put("/:id", updatePayroll);
router.delete("/:id", deletePayroll);

export default router;
