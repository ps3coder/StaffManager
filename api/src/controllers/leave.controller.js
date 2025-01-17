import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addLeave = async (req, res) => {
  const requiredFields = [
    "staff_id",
    "leave_type",
    "start_date",
    "end_date",
    "total_days",
    "status",
    "reason",
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
    const newLeave = await prisma.leave.create({
      data: req.body,
    });
    return res.status(201).json(newLeave);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Leave" });
  }
};

export const getLeaveById = async (req, res) => {
  const { id } = req.params;
  try {
    const leave = await prisma.leave.findUnique({
      where: { id },
    });
    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }
    return res.status(200).json(leave);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Leave" });
  }
};

export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await prisma.leave.findMany();
    return res.status(200).json(leaves);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Leaves" });
  }
};

export const updateLeave = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLeave = await prisma.leave.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedLeave);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Leave not found" });
    }
    return res.status(500).json({ message: "Error updating Leave" });
  }
};

export const deleteLeave = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.leave.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Leave deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Leave not found" });
    }
    return res.status(500).json({ message: "Error deleting Leave" });
  }
};
