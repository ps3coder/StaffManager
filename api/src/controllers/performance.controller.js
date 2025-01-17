import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddPerformance = async (req, res) => {
  const requiredFields = [
    "staff_id",
    "review_period",
    "ratings",
    "recommendations",
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
    const newPerformance = await prisma.performance.create({
      data: req.body,
    });
    return res.status(201).json(newPerformance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Performance" });
  }
};

export const getPerformanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const performance = await prisma.performance.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!performance) {
      return res.status(404).json({ message: "Performance not found" });
    }
    return res.status(200).json(performance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Performance" });
  }
};

export const getAllPerformances = async (req, res) => {
  try {
    const performances = await prisma.performance.findMany();
    return res.status(200).json(performances);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Performances" });
  }
};

export const updatePerformance = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPerformance = await prisma.performance.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedPerformance);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Performance not found" });
    }
    return res.status(500).json({ message: "Error updating Performance" });
  }
};

export const deletePerformance = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.performance.delete({
      where: { id },
    });
    return res
      .status(200)
      .json({ message: "Performance deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Performance not found" });
    }
    return res.status(500).json({ message: "Error deleting Performance" });
  }
};
