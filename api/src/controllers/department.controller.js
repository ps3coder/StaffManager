import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddDepartment = async (req, res) => {
  const requiredFields = ["name", "description", "number_of_employees"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newDepartment = await prisma.department.create({
      data: req.body,
    });
    return res.status(201).json(newDepartment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Department" });
  }
};

export const getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await prisma.department.findUnique({
      where: { id },
    });
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    return res.status(200).json(department);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Department" });
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany();
    return res.status(200).json(departments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Departments" });
  }
};

export const UpdateDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedDepartment);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Department not found" });
    }
    return res.status(500).json({ message: "Error updating Department" });
  }
};

export const DeleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.department.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Department not found" });
    }
    return res.status(500).json({ message: "Error deleting Department" });
  }
};
