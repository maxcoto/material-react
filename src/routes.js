// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import StudentList from "views/Students/StudentList.js";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: Person,
    component: StudentList,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Profile",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/admin",
    bottom: true
  }
];

export default routes;
