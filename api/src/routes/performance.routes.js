import express from "express";
import {
  AddPerformance,
  deletePerformance,
  getAllPerformances,
  getPerformanceById,
  updatePerformance,
} from "../controllers/performance.controller.js";

const router = express.Router();

router.post("/add", AddPerformance);
router.get("/:id", getPerformanceById);
router.get("/", getAllPerformances);
router.put("/:id", updatePerformance);
router.delete("/:id", deletePerformance);
export default router;
