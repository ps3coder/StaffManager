import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout, RequiredAuth } from "./routes/layout/Layout";
import Login from './routes/login/login'
import Register from './routes/register/register'
import HomePage from './routes/homePage/homePage'
import Staff from "./routes/staff/staff";
import Department from "./routes/department/Department";
import Role from "./routes/role/Role";
import Attendence from "./routes/attendence/Attendence";
import Leave from "./routes/leave/Leave";
import Payroll from "./routes/payroll/Payroll";
import Performance from "./routes/performance/Performance";
import Notification from "./routes/notification/Notification";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }, {

      path: "/",
      element: <RequiredAuth />,
      children: [
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/staff",
          element: <Staff />
        },
        {
          path: "/department",
          element: <Department />
        },
        {
          path: "/role",
          element: <Role />
        },
        {
          path: "/attendence",
          element: <Attendence />
        },
        {
          path: "/leave",
          element: <Leave />
        },
        {
          path: "/payroll",
          element: <Payroll />
        },
        {
          path: "/performance",
          element: <Performance />
        },
        {
          path: "/notification",
          element: <Notification />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
