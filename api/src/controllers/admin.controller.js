import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add a new Admin
export const AddAdmin = async (req, res) => {
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "role",
    "password",
    "profile_picture",
    "status",
  ];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newAdmin = await prisma.admin.create({
      data: req.body,
    });
    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Admin" });
  }
};

// Get Admin by ID
export const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await prisma.admin.findUnique({
      where: { id },
    });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Admin" });
  }
};

// Get all Admins
export const getAllAdmin = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany();
    return res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Admins" });
  }
};

// Update Admin
export const UpdateAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAdmin = await prisma.admin.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedAdmin);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(500).json({ message: "Error updating Admin" });
  }
};

// Delete Admin
export const DeleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.admin.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(500).json({ message: "Error deleting Admin" });
  }
};
