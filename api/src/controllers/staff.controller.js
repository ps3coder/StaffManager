import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add a new Staff member
export const AddStaff = async (req, res) => {
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "gender",
    "date_of_birth",
    "address",
    "role",
    "department_id",
    "employment_type",
    "salary_details",
    "date_of_joining",
    "reporting_manager_id",
    "status",
    "profile_picture",
    "documents",
  ];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res
      .status(400)
      .json({ message: "Fields are missing", missingFields });
  }
  try {
    const newStaff = await prisma.staff.create({
      data: req.body,
    });
    return res.status(201).json(newStaff);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Staff" });
  }
};

// Get Staff by ID
export const getStaffById = async (req, res) => {
  const { id } = req.params;
  try {
    const staff = await prisma.staff.findUnique({
      where: { id },
    });
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    return res.status(200).json(staff);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Staff" });
  }
};

// Get all Staff
export const getAllStaff = async (req, res) => {
  try {
    const staffList = await prisma.staff.findMany();
    return res.status(200).json(staffList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Staff list" });
  }
};

// Update Staff
export const UpdateStaff = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedStaff = await prisma.staff.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedStaff);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Staff not found" });
    }
    return res.status(500).json({ message: "Error updating Staff" });
  }
};

// Delete Staff
export const DeleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.staff.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Staff not found" });
    }
    return res.status(500).json({ message: "Error deleting Staff" });
  }
};
