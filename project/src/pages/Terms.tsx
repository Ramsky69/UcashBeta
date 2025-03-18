
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Terms, Conditions, and Policies</h2>
              <p className="text-gray-500 mt-1">Last updated: June 1, 2025</p>
            </div>
            
            <div className="p-6 space-y-6">
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">1. Introduction</h3>
                <p className="text-gray-600">
                  Welcome to UCASH ("we," "our," or "us"). By accessing or using our financial management services, 
                  you agree to be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2. Account Registration and Security</h3>
                <p className="text-gray-600 mb-3">
                  To use our services, you must create an account with accurate, complete, and updated information. 
                  You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="text-gray-600">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of security. 
                  We will not be liable for any loss that you may incur as a result of someone else using your account.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">3. Privacy Policy</h3>
                <p className="text-gray-600 mb-3">
                  Our Privacy Policy describes how we handle the information you provide to us when you use our services. 
                  By using our services, you agree that we can use such information in accordance with our Privacy Policy.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Data We Collect:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Financial information (transaction history, account balances)</li>
                    <li>Usage data (how you interact with our services)</li>
                    <li>Device information (IP address, browser type, operating system)</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">4. Financial Data and Accuracy</h3>
                <p className="text-gray-600 mb-3">
                  While we strive to provide accurate financial information, we cannot guarantee the accuracy of all data. 
                  You should verify all information and consult with a financial advisor for professional advice.
                </p>
                <p className="text-gray-600">
                  We are not responsible for any financial decisions you make based on the information provided through our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">5. Intellectual Property Rights</h3>
                <p className="text-gray-600">
                  Our platform and its contents are protected by copyright, trademark, and other laws. You may not modify, reproduce, 
                  distribute, create derivative works, publicly display or perform, or in any way exploit any of our content without express permission.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">6. Termination</h3>
                <p className="text-gray-600">
                  We reserve the right to suspend or terminate your account and access to our services at any time for any reason, 
                  including but not limited to a violation of these Terms.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">7. Changes to Terms</h3>
                <p className="text-gray-600">
                  We may revise these Terms from time to time. The most current version will always be posted on our website. 
                  By continuing to use our services after any changes, you accept the revised Terms.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-medium text-gray-800 mb-3">8. Contact Information</h3>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at support@ucash.com.
                </p>
              </section>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Terms;
