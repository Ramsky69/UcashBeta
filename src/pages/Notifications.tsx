
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, DollarSign } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';

const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: 'Scam Alert',
      description: 'Beware of phishing emails claiming to be from UCASH. We never ask for your password via email.',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'success',
      title: 'Your bills are paid',
      description: 'Your automated payment for Electricity Bill ($94.50) was successful.',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'success',
      title: 'Your bills are paid',
      description: 'Your automated payment for Internet ($65.00) was successful.',
      time: '1 day ago'
    },
    {
      id: 4,
      type: 'info',
      title: 'New feature available',
      description: 'UCASH now supports international transfers to more countries. Check it out!',
      time: '2 days ago'
    },
    {
      id: 5,
      type: 'warning',
      title: 'Unusual activity detected',
      description: 'We noticed a login attempt from a new device. Was this you?',
      time: '3 days ago'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-ucash-dark bg-opacity-90 rounded-lg p-6 shadow-sm mb-6">
              <div className="flex items-center mb-4">
                <Bell size={24} className="text-white mr-3" />
                <h2 className="text-2xl font-semibold text-white">Notifications</h2>
              </div>
              
              <p className="text-gray-300">
                Stay updated with important alerts, transaction updates, and account notifications.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y">
                {notifications.map((notification, index) => (
                  <motion.div 
                    key={notification.id}
                    className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        {notification.type === 'warning' ? (
                          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Bell size={20} className="text-yellow-600" />
                          </div>
                        ) : notification.type === 'success' ? (
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <DollarSign size={20} className="text-green-600" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Bell size={20} className="text-blue-600" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm">{notification.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {notifications.length === 0 && (
                <div className="p-10 text-center">
                  <Bell size={40} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-1">No notifications</h3>
                  <p className="text-gray-500">You're all caught up! No new notifications at this time.</p>
                </div>
              )}
            </div>
            
            {notifications.length > 0 && (
              <div className="text-center mt-6">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Notifications
                </button>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
