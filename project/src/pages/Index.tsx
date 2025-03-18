import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-ucash-dark">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Save and monitor your Finance with us.
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg mb-10 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We believe that when you save smarter, you live better. Our
                platform is designed to help you build strong financial habits
                that lead to long-term stability and success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-300 hover:bg-white text-ucash-dark rounded-full px-8"
                >
                  <Link to="/register">REGISTER NOW</Link>
                </Button>
              </motion.div>
            </div>

            <div className="order-1 md:order-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="bg-ucash-dark p-6 rounded-xl mb-8 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-medium">
                          Total Balance
                        </h3>
                        <span className="text-gray-400 text-sm">
                          Updated Today
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-white text-3xl font-bold">$</span>
                        <span className="text-white text-5xl font-bold ml-1">
                          5,254
                        </span>
                        <span className="text-white text-2xl ml-1">.50</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-5 rounded-xl mb-8 transform hover:scale-105 transition-transform duration-300">
                      <h3 className="text-white font-medium mb-3">
                        Recent Transaction
                      </h3>
                      <div className="flex justify-between items-center text-white/90 text-sm mb-2">
                        <span>Coffee Shop</span>
                        <span>- $4.50</span>
                      </div>
                      <div className="flex justify-between items-center text-white/90 text-sm mb-2">
                        <span>Grocery Store</span>
                        <span>- $32.75</span>
                      </div>
                      <div className="flex justify-between items-center text-white/90 text-sm">
                        <span>Salary Deposit</span>
                        <span className="text-green-300">+ $1,200.00</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="bg-ucash p-4 rounded-xl w-[48%] transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white text-sm font-medium mb-2">
                          Savings Goal
                        </h3>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div
                            className="bg-green-400 h-2 rounded-full"
                            style={{ width: '65%' }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-300">
                          <span>$650</span>
                          <span>$1,000</span>
                        </div>
                      </div>

                      <div className="bg-ucash p-4 rounded-xl w-[48%] transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white text-sm font-medium mb-2">
                          Monthly Budget
                        </h3>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-300">
                          <span>$2,400</span>
                          <span>$3,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
