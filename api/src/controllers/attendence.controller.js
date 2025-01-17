import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddAttendence = async (req, res) => {
  const requiredFields = [
    "staff_id",
    "date",
    "check_in_time",
    "check_out_time",
    "hours_worked",
    "status",
    "remarks",
  ];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newAttendence = await prisma.attendance.create({
      data: req.body,
    });
    return res.status(201).json(newAttendence);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Attendence" });
  }
};

export const getAttendenceById = async (req, res) => {
  const { id } = req.params;
  try {
    const Attendence = await prisma.attendance.findUnique({
      where: { id },
    });
    if (!Attendence) {
      return res.status(404).json({ message: "Attendence not found" });
    }
    return res.status(200).json(Attendence);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Attendence" });
  }
};

export const getAllAttendence = async (req, res) => {
  try {
    const Attendence = await prisma.attendance.findMany();
    return res.status(200).json(Attendence);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Attendence" });
  }
};

export const UpdateAttendence = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAttendence = await prisma.attendance.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedAttendence);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Attendence not found" });
    }
    return res.status(500).json({ message: "Error updating Attendence" });
  }
};

export const DeleteAttendence = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.attendance.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Attendence deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Attendence not found" });
    }
    return res.status(500).json({ message: "Error deleting Attendence" });
  }
};
