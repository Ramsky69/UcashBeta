
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Calendar, Filter } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import FilterModal from '@/components/modals/FilterModal';
import TransactionHistoryModal from '@/components/modals/TransactionHistoryModal';

const Overview: React.FC = () => {
  const [timeframe, setTimeframe] = useState('monthly');
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [transactionsModalOpen, setTransactionsModalOpen] = useState(false);
  
  const monthlyData = [
    { name: 'Jan', income: 4200, expense: 3100 },
    { name: 'Feb', income: 4500, expense: 3300 },
    { name: 'Mar', income: 4800, expense: 3600 },
    { name: 'Apr', income: 5100, expense: 3800 },
    { name: 'May', income: 5400, expense: 3900 },
    { name: 'Jun', income: 4900, expense: 3700 },
  ];
  
  const weeklyData = [
    { name: 'Week 1', income: 1200, expense: 900 },
    { name: 'Week 2', income: 1300, expense: 850 },
    { name: 'Week 3', income: 1100, expense: 950 },
    { name: 'Week 4', income: 1400, expense: 1000 },
  ];
  
  const chartData = timeframe === 'monthly' ? monthlyData : weeklyData;
  
  const expenseCategories = [
    { name: 'Housing', value: 35 },
    { name: 'Transportation', value: 15 },
    { name: 'Food', value: 20 },
    { name: 'Utilities', value: 10 },
    { name: 'Entertainment', value: 12 },
    { name: 'Others', value: 8 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  const recentTransactions = [
    { 
      id: 1, 
      description: 'Grocery Store', 
      category: 'Food', 
      amount: -126.35, 
      date: '2 days ago' 
    },
    { 
      id: 2, 
      description: 'Monthly Salary', 
      category: 'Income', 
      amount: 4250.00, 
      date: '5 days ago' 
    },
    { 
      id: 3, 
      description: 'Netflix Subscription', 
      category: 'Entertainment', 
      amount: -15.99, 
      date: '1 week ago' 
    },
    { 
      id: 4, 
      description: 'Electricity Bill', 
      category: 'Utilities', 
      amount: -94.72, 
      date: '1 week ago' 
    },
    { 
      id: 5, 
      description: 'Freelance Payment', 
      category: 'Income', 
      amount: 850.00, 
      date: '2 weeks ago' 
    },
  ];
  
  const handleApplyFilters = (filters: any) => {
    console.log('Applied filters:', filters);
    // In a real app, this would filter the data based on the applied filters
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-2xl font-bold text-gray-800">Financial Overview</h1>
                <p className="text-gray-600">Comprehensive insights into your financial health</p>
              </motion.div>
              
              <motion.div 
                className="flex space-x-2 mt-4 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Button 
                  variant={timeframe === 'weekly' ? 'default' : 'outline'} 
                  onClick={() => setTimeframe('weekly')}
                  className={timeframe === 'weekly' ? 'bg-ucash-dark' : ''}
                >
                  Weekly
                </Button>
                <Button 
                  variant={timeframe === 'monthly' ? 'default' : 'outline'} 
                  onClick={() => setTimeframe('monthly')}
                  className={timeframe === 'monthly' ? 'bg-ucash-dark' : ''}
                >
                  Monthly
                </Button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-gray-500 text-sm">Total Income</h3>
                    <p className="text-2xl font-bold">$25,950.00</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <ArrowUpRight className="text-green-600" size={20} />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium mr-2">+12.5%</span>
                  <span className="text-gray-500 text-sm">from last period</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-gray-500 text-sm">Total Expenses</h3>
                    <p className="text-2xl font-bold">$18,340.65</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded-full">
                    <ArrowDownRight className="text-red-600" size={20} />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 font-medium mr-2">+8.2%</span>
                  <span className="text-gray-500 text-sm">from last period</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-gray-500 text-sm">Net Savings</h3>
                    <p className="text-2xl font-bold">$7,609.35</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-full">
                    <DollarSign className="text-blue-600" size={20} />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-medium mr-2">+23.7%</span>
                  <span className="text-gray-500 text-sm">from last period</span>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Income vs Expenses</h2>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">
                        {timeframe === 'monthly' ? 'Jan - Jun 2025' : 'June 2025'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, undefined]}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #f0f0f0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }}
                        />
                        <Bar dataKey="income" name="Income" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expense" name="Expenses" fill="#FF5252" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Expense Breakdown</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-2"
                      onClick={() => setFilterModalOpen(true)}
                    >
                      <Filter size={16} className="text-gray-500" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={expenseCategories}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {expenseCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, undefined]} />
                        <Legend 
                          layout="vertical" 
                          verticalAlign="middle" 
                          align="right"
                          wrapperStyle={{ fontSize: '12px' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
                  <Button 
                    className="bg-ucash-dark text-white text-xs h-8"
                    onClick={() => setTransactionsModalOpen(true)}
                  >
                    View All
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {transaction.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                            {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      
      <FilterModal
        open={filterModalOpen}
        onOpenChange={setFilterModalOpen}
        onApply={handleApplyFilters}
        type="expenses"
      />
      
      <TransactionHistoryModal
        open={transactionsModalOpen}
        onOpenChange={setTransactionsModalOpen}
      />
    </div>
  );
};

export default Overview;
