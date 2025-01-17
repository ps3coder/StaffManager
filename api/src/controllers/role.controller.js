import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddRole = async (req, res) => {
  const requiredFields = ["name", "description", "permissions", "salary_range"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newRole = await prisma.role.create({
      data: req.body,
    });
    return res.status(201).json(newRole);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Role" });
  }
};

export const getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await prisma.role.findUnique({
      where: { id },
    });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(200).json(role);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Role" });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    return res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving roles" });
  }
};

export const UpdateRole = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRole = await prisma.role.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedRole);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(500).json({ message: "Error updating Role" });
  }
};

export const DeleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.role.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Role not found" });
    }
    return res.status(500).json({ message: "Error deleting Role" });
  }
};
