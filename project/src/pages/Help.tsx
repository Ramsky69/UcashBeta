
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Help: React.FC = () => {
  const faqItems = [
    {
      question: "How do I add a new bank account?",
      answer: "To add a new bank account, go to the 'My Card' section and click on 'Add New Account' button. Follow the prompts to enter your bank details and complete the verification process."
    },
    {
      question: "How secure is my financial data?",
      answer: "We take security very seriously. All your data is encrypted using bank-level security standards. We use two-factor authentication and never store your bank login credentials on our servers."
    },
    {
      question: "How do I track my expenses?",
      answer: "Your expenses are automatically tracked in the Transactions page. You can categorize, filter, and search for specific transactions. For detailed insights, check the Overview page for charts and spending patterns."
    },
    {
      question: "Can I set up budget alerts?",
      answer: "Yes! In the Dashboard page, navigate to the Budget Overview section and click 'Set Budget Alerts'. You can set thresholds for different categories and receive notifications when you're approaching your limits."
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to the Account page and click 'Edit Info'. Make the desired changes to your profile and click 'Save Changes' to update your information."
    },
    {
      question: "What should I do if I forgot my password?",
      answer: "On the login page, click on 'Forgot Password'. Enter the email associated with your account, and we'll send you instructions to reset your password securely."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-ucash-dark rounded-lg p-6 text-white mb-6">
              <h2 className="text-2xl font-semibold mb-2">How can we help you?</h2>
              <p className="text-white/80 mb-4">Search our knowledge base or browse the topics below</p>
              
              <div className="relative">
                <Input 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Search for help topics..."
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with our support team in real-time</p>
                <Button className="w-full bg-ucash hover:bg-ucash-dark">Start Chat</Button>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Call us directly at our helpline</p>
                <Button className="w-full bg-ucash hover:bg-ucash-dark">Call Support</Button>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Send us an email for any inquiry</p>
                <Button className="w-full bg-ucash hover:bg-ucash-dark">Email Us</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
                <p className="text-gray-500 text-sm mt-1">Find quick answers to common questions</p>
              </div>
              
              <div className="p-6">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Can't find what you're looking for?</h3>
              <p className="text-gray-600 mb-4">Contact our support team for personalized assistance</p>
              <Button className="bg-ucash-dark hover:bg-ucash text-white">Contact Support</Button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Help;
