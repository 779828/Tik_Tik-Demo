import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidenav from "./layout/Sidenav";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Users from "./components/Users";
import Devices from "./components/Devices";
import Straps from "./components/Straps";
import Community from "./components/Community";
import Exercise from "./components/Exercise";
import Notifications from "./components/Notifications";
import DeviceFirmware from "./components/DeviceFirmware";
import Reports from "./components/Reports";
import { RiAdminFill, RiUserCommunityFill } from "react-icons/ri";
import { MdDashboard, MdDevicesOther, MdDevices } from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoMdFitness, IoIosNotifications } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import Login from "./layout/Login";

const menuItems = [
  {
    text: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    text: "Admin",
    icon: <RiAdminFill />,
    path: "/admin",
    component: <Admin />,
  },
  { text: "Users", icon: <FaUsers />, path: "/users", component: <Users /> },
  {
    text: "Devices",
    icon: <MdDevicesOther />,
    path: "/devices",
    component: <Devices />,
  },
  { text: "Straps", icon: <BsWatch />, path: "/straps", component: <Straps /> },
  {
    text: "Community",
    icon: <RiUserCommunityFill />,
    path: "/community",
    component: <Community />,
  },
  {
    text: "Exercise",
    icon: <IoMdFitness />,
    path: "/exercise",
    component: <Exercise />,
  },
  {
    text: "Notifications",
    icon: <IoIosNotifications />,
    path: "/notifications",
    component: <Notifications />,
  },
  {
    text: "Device Firmware",
    icon: <MdDevices />,
    path: "/device-firmware",
    component: <DeviceFirmware />,
  },
  {
    text: "Reports",
    icon: <TbReportSearch />,
    path: "/reports",
    component: <Reports />,
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Main App with Sidebar */}
        <Route
          path="*"
          element={
            <Sidenav menuItems={menuItems}>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                {menuItems.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    element={item.component}
                  />
                ))}
              </Routes>
            </Sidenav>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
