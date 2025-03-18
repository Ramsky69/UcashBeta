
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Clock, MoreHorizontal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CardActionModal from '@/components/modals/CardActionModal';

const Card: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [topupModalOpen, setTopupModalOpen] = useState(false);
  const { toast } = useToast();
  
  const [cardData, setCardData] = useState({
    fullName: 'Ralph Laurenz',
    cardNumber: '0000 0000 0000 0000',
    expirationDate: '04/2025',
    zipCode: '10001'
  });
  
  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Card updated",
      description: "Your card details have been successfully updated.",
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">My Account & Balance</h2>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal size={18} />
                  </Button>
                </div>
                
                <div className="bg-ucash-dark rounded-lg p-5 text-white mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-gray-300 text-sm">Total Balance</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <img src="/public/lovable-uploads/4b8ac757-ea1f-4e84-bb26-8dfec2393f88.png" alt="Logo" className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-1">$</span>
                      <span className="text-4xl font-bold">5254</span>
                      <span className="text-2xl font-medium ml-1">.50</span>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex">
                      <div className="flex-1">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
                          ))}
                        </div>
                        <div className="flex space-x-1 mt-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
                          ))}
                        </div>
                        <div className="flex space-x-1 mt-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white/70 text-xs">Exp Date</p>
                        <p className="text-white text-sm font-medium">April 2028</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Card Info</p>
                      <p className="font-medium">{cardData.fullName}</p>
                      <p className="text-sm text-gray-600">123-456-7890</p>
                    </div>
                    <div>
                      <div className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full mb-2">
                        ✦ Priority Customer
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Status</p>
                        <p className="text-sm font-medium text-green-600">Activated</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-right">
                    <p className="text-xs text-gray-500">Card Type</p>
                    <p className="text-sm font-medium">Diamond Card</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="flex items-center justify-center"
                    onClick={() => setHistoryModalOpen(true)}
                  >
                    <CreditCard size={16} className="mr-2" />
                    History
                  </Button>
                  <Button 
                    className="bg-ucash hover:bg-ucash-dark text-white flex items-center justify-center"
                    onClick={() => setTopupModalOpen(true)}
                  >
                    <Clock size={16} className="mr-2" />
                    Top-up
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Card Details</h2>
                  {!isEditing ? (
                    <Button 
                      onClick={() => setIsEditing(true)} 
                      size="sm" 
                      className="bg-ucash-dark hover:bg-ucash text-white"
                    >
                      Edit Details
                    </Button>
                  ) : null}
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    {isEditing ? (
                      <Input 
                        name="fullName"
                        value={cardData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                      />
                    ) : (
                      <div className="bg-white border border-gray-300 rounded-md p-2.5">{cardData.fullName}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    {isEditing ? (
                      <Input 
                        name="cardNumber"
                        value={cardData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                        maxLength={19}
                        placeholder="0000 0000 0000 0000"
                      />
                    ) : (
                      <div className="bg-white border border-gray-300 rounded-md p-2.5">{cardData.cardNumber}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                    {isEditing ? (
                      <Input 
                        name="expirationDate"
                        value={cardData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                        placeholder="MM/YYYY"
                      />
                    ) : (
                      <div className="bg-white border border-gray-300 rounded-md p-2.5">{cardData.expirationDate}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                    {isEditing ? (
                      <Input 
                        name="zipCode"
                        value={cardData.zipCode}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                      />
                    ) : (
                      <div className="bg-white border border-gray-300 rounded-md p-2.5">{cardData.zipCode}</div>
                    )}
                  </div>
                  
                  {isEditing && (
                    <div className="flex justify-end mt-6">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)} 
                        className="mr-3"
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSave} 
                        className="bg-ucash-dark hover:bg-ucash text-white"
                      >
                        Save Details
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      
      {/* Card Modals */}
      <CardActionModal 
        open={historyModalOpen}
        onOpenChange={setHistoryModalOpen}
        action="history"
      />
      
      <CardActionModal 
        open={topupModalOpen}
        onOpenChange={setTopupModalOpen}
        action="topup"
      />
    </div>
  );
};

export default Card;
