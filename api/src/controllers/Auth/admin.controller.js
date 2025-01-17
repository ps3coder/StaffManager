import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.admin.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }

    const { password: userPassword, ...userInfo } = user;
    if (userPassword !== password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to login" });
  }
};
export const logout = (req, res) => {
  // db operations
  res.clearCookie("token").status(200).json({ message: "Logout successfull" });
};
