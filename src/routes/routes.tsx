
import { RouteObject } from 'react-router-dom';
import Index from '../pages/Index';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import Notifications from '../pages/Notifications';
import Account from '../pages/Account';
import Card from '../pages/Card';
import NotFound from '../pages/NotFound';
import Overview from '../pages/Overview';
import Help from '../pages/Help';
import About from '../pages/About';
import Terms from '../pages/Terms';
import Logout from '../pages/Logout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/overview',
    element: <Overview />
  },
  {
    path: '/transactions',
    element: <Transactions />
  },
  {
    path: '/notifications',
    element: <Notifications />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/card',
    element: <Card />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
