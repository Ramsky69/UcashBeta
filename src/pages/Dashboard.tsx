
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MoreHorizontal, ArrowRight, Wallet2, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import BudgetDetailsModal from '@/components/modals/BudgetDetailsModal';
import TransactionHistoryModal from '@/components/modals/TransactionHistoryModal';
import SavingsDetailModal from '@/components/modals/SavingsDetailModal';

const Dashboard: React.FC = () => {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [savingsModalOpen, setSavingsModalOpen] = useState(false);
  
  const chartData = [
    { week: 'Week 1', utilities: 12, groceries: 5, others: 25 },
    { week: 'Week 2', utilities: 30, groceries: 8, others: 10 },
    { week: 'Week 3', utilities: 25, groceries: 25, others: 38 },
    { week: 'Week 4', utilities: 40, groceries: 15, others: 30 },
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
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Financial Activities</h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                    <select className="text-sm border rounded px-2 py-1">
                      <option>This Month</option>
                      <option>Last Month</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </div>
                
                <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50 mb-4 h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                      <XAxis dataKey="week" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderColor: '#eee' }}
                        labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
                      />
                      <Line type="monotone" dataKey="utilities" stroke="#4CAF50" strokeWidth={2} dot={{ stroke: '#4CAF50', strokeWidth: 2, r: 4, fill: 'white' }} />
                      <Line type="monotone" dataKey="groceries" stroke="#2196F3" strokeWidth={2} dot={{ stroke: '#2196F3', strokeWidth: 2, r: 4, fill: 'white' }} />
                      <Line type="monotone" dataKey="others" stroke="#9C27B0" strokeWidth={2} dot={{ stroke: '#9C27B0', strokeWidth: 2, r: 4, fill: 'white' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Utilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Groceries</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Others</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Savings</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-500"
                    onClick={() => setSavingsModalOpen(true)}
                  >
                    <MoreHorizontal size={18} />
                  </Button>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Life Savings</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-500 h-6 w-6 p-0"
                      onClick={() => setSavingsModalOpen(true)}
                    >
                      <MoreHorizontal size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold mr-1">$</span>
                    <span className="text-3xl font-bold">291,604</span>
                    <span className="text-xl font-medium ml-1">.99</span>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <span>▶</span>
                      <span className="ml-2">From Cosmetics and Skincare</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Proving the value of quality and care</p>
                  </div>
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Budget Overview</h2>
                  <Button 
                    onClick={() => setBudgetModalOpen(true)}
                    className="text-blue-500 text-sm hover:underline"
                    variant="link"
                  >
                    See Details
                  </Button>
                </div>
                
                <div className="bg-ucash-dark rounded-lg p-5 text-white">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">Monthly Budget</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-300 h-6 w-6 p-0"
                      onClick={() => setBudgetModalOpen(true)}
                    >
                      <MoreHorizontal size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-baseline mb-4">
                    <span className="text-xl font-medium mr-1">$</span>
                    <span className="text-4xl font-bold">6000</span>
                    <span className="text-lg font-medium ml-1">.00</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-white/90 text-sm">
                      <span>▶</span>
                      <span className="ml-2">This is your monthly budget</span>
                    </div>
                    <p className="text-xs text-white/70 mt-1">This is initially programmed to give you a budget</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Wallet2 size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Expenses</h3>
                          <p className="text-xs text-gray-500">This month</p>
                        </div>
                      </div>
                      <span className="text-lg font-semibold">$2,435.56</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <CreditCard size={20} className="text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Income</h3>
                          <p className="text-xs text-gray-500">This month</p>
                        </div>
                      </div>
                      <span className="text-lg font-semibold">$4,250.00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-5 bg-ucash hover:bg-ucash-dark text-white flex items-center justify-center"
                  onClick={() => setReportModalOpen(true)}
                >
                  <span>View Full Report</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      
      <BudgetDetailsModal open={budgetModalOpen} onOpenChange={setBudgetModalOpen} />
      <TransactionHistoryModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
      <SavingsDetailModal open={savingsModalOpen} onOpenChange={setSavingsModalOpen} />
    </div>
  );
};

export default Dashboard;
