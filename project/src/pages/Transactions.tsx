
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Printer, Share2, CheckCircle, Clock, Circle, Plus } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const Transactions: React.FC = () => {
  const [filter, setFilter] = useState(false);
  
  const transactions = [
    { 
      id: 1, 
      purpose: 'Fauget Cafe', 
      subtext: 'Coffee Shop', 
      date: 'Today', 
      time: '2m ago', 
      amount: 500, 
      type: 'Gift Code', 
      status: 'Done' 
    },
    { 
      id: 2, 
      purpose: 'Claudia Store', 
      subtext: 'Accessories', 
      date: 'Today', 
      time: '5m ago', 
      amount: 1000, 
      type: 'Transfer', 
      status: 'Done' 
    },
    { 
      id: 3, 
      purpose: 'Chidi Barber', 
      subtext: 'Barber Shop', 
      date: 'Today', 
      time: '1h ago', 
      amount: 500, 
      type: 'Gift Code', 
      status: 'Done' 
    },
    { 
      id: 4, 
      purpose: 'Cahaya Dewi', 
      subtext: 'Transfer', 
      date: 'Today', 
      time: '2h ago', 
      amount: 1000, 
      type: 'Transfer', 
      status: 'Pending' 
    },
    { 
      id: 5, 
      purpose: 'Yael Amari', 
      subtext: 'Decoration', 
      date: 'Yesterday', 
      time: '16:30 PM', 
      amount: 500, 
      type: 'Gift Code', 
      status: 'Done' 
    },
    { 
      id: 6, 
      purpose: 'Larana, Inc.', 
      subtext: 'Hotel', 
      date: 'Yesterday', 
      time: '08:00 AM', 
      amount: 1000, 
      type: 'Gift Code', 
      status: 'Done' 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Transaction</h2>
                    <Button variant="ghost" size="sm" className="ml-2 text-gray-500 h-8 w-8 p-0">
                      <Settings size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">Sort by:</span>
                    <select className="border rounded px-2 py-1">
                      <option>Recently</option>
                      <option>Oldest</option>
                      <option>Highest Amount</option>
                      <option>Lowest Amount</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <Button variant="outline" className="flex items-center text-gray-700">
                    <Printer size={16} className="mr-2" />
                    Print
                  </Button>
                  
                  <Button variant="outline" className="flex items-center text-gray-700">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-800">{transaction.purpose}</div>
                            <div className="text-xs text-gray-500">{transaction.subtext}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-800">{transaction.date}</div>
                            <div className="text-xs text-gray-500">{transaction.time}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-medium text-gray-800">${transaction.amount.toFixed(2)}</div>
                            <div className="text-xs text-gray-500">{transaction.type}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              {transaction.status === 'Done' ? (
                                <>
                                  <CheckCircle size={16} className="text-green-500 mr-1" />
                                  <span>Done</span>
                                </>
                              ) : transaction.status === 'Pending' ? (
                                <>
                                  <Clock size={16} className="text-yellow-500 mr-1" />
                                  <span>Pending</span>
                                </>
                              ) : (
                                <>
                                  <Circle size={16} className="text-gray-500 mr-1" />
                                  <span>{transaction.status}</span>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="ghost" className="text-gray-600">
                    Show All My Transactions
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Category</h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Filter</span>
                    <Switch checked={filter} onCheckedChange={setFilter} />
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Purpose</h3>
                    <Input placeholder="e.g., Grocery Shopping" className="bg-white" />
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Date</h3>
                    <Input type="date" className="bg-white" />
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Amount</h3>
                    <Input type="number" placeholder="0.00" className="bg-white" />
                  </div>
                  
                  <Button className="w-full bg-ucash hover:bg-ucash-dark text-white mt-2 flex items-center justify-center">
                    <Plus size={16} className="mr-2" />
                    Add Transaction
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
