
import React from 'react';
import { motion } from 'framer-motion';
import { Users, LineChart, ShieldCheck, Heart } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Ralph Laurenz",
      role: "Founder & CEO",
      image: "/lovable-uploads/93b109d4-bfe1-44c4-a068-5c4308286af7.png",
      description: "Ralph founded UCASH with a vision to make personal finance management accessible to everyone."
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      image: "/lovable-uploads/4b8ac757-ea1f-4e84-bb26-8dfec2393f88.png",
      description: "Sophia leads our technology team, ensuring we deliver secure and innovative financial solutions."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      image: "",
      description: "Michael oversees our product development, focusing on creating intuitive user experiences."
    },
    {
      name: "Aisha Johnson",
      role: "Financial Advisor",
      image: "",
      description: "Aisha brings over 10 years of financial expertise to help shape our advisory features."
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
            {/* Hero Section */}
            <div className="bg-ucash-dark rounded-lg overflow-hidden mb-8">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About UCASH</h1>
                <p className="text-white/80 text-lg max-w-2xl mb-6">
                  We're on a mission to revolutionize how people manage their finances, making it simpler, 
                  smarter, and more secure for everyone.
                </p>
                <div className="flex items-center">
                  <div className="h-1 w-10 bg-white rounded mr-3"></div>
                  <p className="text-white/60 text-sm">EST. 2023</p>
                </div>
              </div>
            </div>
            
            {/* Our Story */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  UCASH began with a simple observation: too many people struggle with managing their finances, 
                  not because they lack the ability, but because they lack the right tools.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, we set out to create a platform that would demystify personal finance and 
                  empower individuals to take control of their financial future. What started as a simple 
                  expense tracker has evolved into a comprehensive financial management solution.
                </p>
                <p className="text-gray-600">
                  Today, UCASH serves thousands of users worldwide, helping them save more effectively, spend 
                  more wisely, and plan more confidently for their future.
                </p>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Everything we do begins with understanding our users' needs. We're committed to creating 
                  solutions that address real financial challenges.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Empowerment</h3>
                <p className="text-gray-600">
                  We believe in democratizing financial knowledge. Our goal is to give everyone the tools 
                  and insights to make informed financial decisions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Absolute Security</h3>
                <p className="text-gray-600">
                  We understand that financial data is sensitive. That's why we've implemented bank-level 
                  security measures to protect our users' information.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We're constantly exploring new technologies and methodologies to improve our platform and 
                  deliver more value to our users.
                </p>
              </div>
            </div>
            
            {/* Our Team */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex space-x-4">
                      <Avatar className="h-16 w-16 border-2 border-gray-200">
                        {member.image ? (
                          <AvatarImage src={member.image} alt={member.name} />
                        ) : (
                          <AvatarFallback className="bg-ucash-dark text-white text-lg">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-ucash-dark text-sm mb-1">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="bg-ucash-dark rounded-lg p-6 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                We're just getting started. Join thousands of users who are taking control of their financial future with UCASH.
              </p>
              <button className="bg-white text-ucash-dark font-semibold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Start for Free
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default About;
