// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
//{{expand}}

// views
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import StudentList from "views/Students/StudentList.js";
//{{expand}}

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: ""
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: ""
  },
  {
    path: "/students",
    name: "Students",
    icon: Person,
    component: StudentList,
    layout: ""
  },
  {
    path: "/user",
    name: "Profile",
    icon: AccountCircle,
    component: UserProfile,
    layout: "",
    bottom: true
  },
  //{{expand}}
];

export default routes;
