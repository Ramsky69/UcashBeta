import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  LayoutList,
  FileBarChart2,
  Bell,
  User,
  CreditCard,
  HelpCircle,
  LogOut,
  Info,
  FileText,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/dashboard',
      highlight: true,
    },
    { icon: FileBarChart2, label: 'Overview', path: '/overview' },
    { icon: LayoutList, label: 'Transaction', path: '/transactions' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: User, label: 'Account', path: '/account' },
    { icon: CreditCard, label: 'My Card', path: '/card' },
  ];

  const bottomMenuItems = [
    { icon: HelpCircle, label: 'Help', path: '/help' },
    { icon: Info, label: 'About Us', path: '/about' },
    { icon: FileText, label: 'Terms', path: '/terms' },
    { icon: LogOut, label: 'Log Out', path: '/logout' },
  ];

  const MenuItem = ({ icon: Icon, label, path: itemPath, highlight }: any) => (
    <li>
      <Link
        to={itemPath}
        className={`sidebar-link ${path === itemPath ? 'active' : ''} ${
          highlight ? 'font-medium' : ''
        }`}
      >
        <Icon size={18} />
        <span>{label}</span>
      </Link>
    </li>
  );

  return (
    <aside className="bg-ucash-dark w-16 md:w-52 flex-shrink-0 h-full">
      <div className="h-full flex flex-col justify-between py-4">
        <div>
          <ul className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-1 px-2">
            {bottomMenuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
