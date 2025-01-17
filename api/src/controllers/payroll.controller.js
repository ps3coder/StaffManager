import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addPayroll = async (req, res) => {
  const requiredFields = [
    "staff_id",
    "pay_month",
    "base_salary",
    "bonuses",
    "deductions",
    "net_salary",
    "status",
    "payment_date",
    "remarks",
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
    const newPayroll = await prisma.payroll.create({
      data: req.body,
    });
    return res.status(201).json(newPayroll);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating Payroll" });
  }
};

export const getPayrollById = async (req, res) => {
  const { id } = req.params;
  try {
    const payroll = await prisma.payroll.findUnique({
      where: { id },
    });
    if (!payroll) {
      return res.status(404).json({ message: "Payroll not found" });
    }
    return res.status(200).json(payroll);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Payroll" });
  }
};

export const getAllPayrolls = async (req, res) => {
  try {
    const payrolls = await prisma.payroll.findMany();
    return res.status(200).json(payrolls);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving Payrolls" });
  }
};

export const updatePayroll = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPayroll = await prisma.payroll.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedPayroll);
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Payroll not found" });
    }
    return res.status(500).json({ message: "Error updating Payroll" });
  }
};

export const deletePayroll = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.payroll.delete({
      where: { id },
    });
    return res.status(200).json({ message: "Payroll deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Payroll not found" });
    }
    return res.status(500).json({ message: "Error deleting Payroll" });
  }
};
