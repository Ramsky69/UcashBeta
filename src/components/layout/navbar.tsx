import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Logo from '../ui/logo';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
  userMembership?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn = false,
  userName = 'Ralph Laurenz',
  userAvatar = '/lovable-uploads/45080ce0-29a4-4328-bcfb-a9711a4bdd6b.png',
  userMembership = 'Diamond Member',
}) => {
  return (
    <nav className="bg-ucash-dark w-full px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Logo variant={isLoggedIn ? 'default' : 'default'} />

        {isLoggedIn && (
          <div className="ml-8 hidden md:block">
            <p className="text-white text-lg font-medium">
              Welcome back, {userName}
            </p>
            <p className="text-gray-300 text-sm">
              Let's take a detailed look at your financial situation today
            </p>
          </div>
        )}
      </div>

      {!isLoggedIn ? (
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Login
            </Link>
          </div>
          <Button
            asChild
            className="bg-white text-ucash-dark hover:bg-gray-200 font-medium rounded-sm"
          >
            <Link to="/register">Start for free</Link>
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search here"
                className="py-1.5 px-4 outline-none text-sm w-40 md:w-60"
              />
              <button className="bg-blue-500 p-2 text-white">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-right mr-3 hidden md:block">
              <p className="text-white font-medium">{userName}</p>
              <p className="text-gray-300 text-xs">{userMembership}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-400">
              <img
                src={userAvatar}
                alt={userName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
