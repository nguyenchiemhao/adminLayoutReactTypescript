import Dashboard from "../app/admin-layout/content/dashboard/Dashboard";
import Users from "../app/admin-layout/content/users/Users";
import Test from "../app/test/Test";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PageNotFound from "../app/404/PageNotFound";
import ErrorIcon from '@material-ui/icons/Error';

const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: "Dash board",
    component: Dashboard,
    key: 1,
    icon: DashboardIcon,
  },
  {
    path: '/admin/users',
    name: "User management",
    component: Users,
    key: 2,
    icon: PeopleIcon,
  },
  {
    path: '/admin/test',
    name: "Test",
    component: Test,
    key: 3,
    icon: DeveloperModeIcon,
  },
  {
    path: '*',
    name: "404 Page Not Found",
    component: PageNotFound,
    key: 3,
    icon: ErrorIcon,
  }
]

export default ADMIN_ROUTES