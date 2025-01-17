import express from "express";
import { configDotenv } from "dotenv";
import "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRoutes from "./src/routes/admin.routes.js";
import departmentRoutes from "./src/routes/department.routes.js";
import staffRoutes from "./src/routes/staff.routes.js";
import roleRoutes from "./src/routes/role.routes.js";
import attendanceRoutes from "./src/routes/attendence.routes.js";
import leaveRoutes from "./src/routes/leave.routes.js";
import payrollRoutes from "./src/routes/payroll.routes.js";
import performanceRoutes from "./src/routes/performance.routes.js";
import notiRoutes from "./src/routes/notification.routes.js";
import authRoutes from "./src/routes/Auth/auth.routes.js";

configDotenv();

const app = express();
const corsOrigin = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 3000;

app.use("/api/admin", adminRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/att", attendanceRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/performance", performanceRoutes);
app.use("/api/noti", notiRoutes);
app.use("/api/admin", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} at http://localhost:${port}`);
});
