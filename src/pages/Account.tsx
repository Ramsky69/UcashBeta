
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Account: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("/lovable-uploads/93b109d4-bfe1-44c4-a068-5c4308286af7.png");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast: uiToast } = useToast();
  
  const [userData, setUserData] = useState({
    fullName: 'Ralph Laurenz',
    birthday: '1990-05-15',
    phoneNumber: '+1234567890',
    email: 'ralph.laurenz@example.com',
    nationality: 'United States',
    password: '********'
  });
  
  const [savedUserData, setSavedUserData] = useState({...userData});
  
  const handleSave = () => {
    // Simulating saving profile photo
    if (photoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setProfilePhoto(reader.result);
        }
      };
      reader.readAsDataURL(photoFile);
      setPhotoFile(null);
    }
    
    setSavedUserData({...userData});
    setIsEditing(false);
    
    // Show success toast with different methods
    uiToast({
      title: "Account updated",
      description: "Your account information has been successfully updated.",
    });
    
    toast.success("Profile saved successfully", {
      description: "All your changes have been saved."
    });
  };
  
  const handleCancel = () => {
    // Revert changes
    setUserData({...savedUserData});
    setPhotoFile(null);
    setIsEditing(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-ucash-dark flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="ml-3 text-xl font-semibold text-gray-800">My Account</h2>
                  </div>
                  
                  {!isEditing ? (
                    <Button 
                      onClick={() => setIsEditing(true)} 
                      size="sm" 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                    >
                      Edit Info
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSave} 
                      size="sm" 
                      className="bg-ucash-dark hover:bg-ucash text-white"
                    >
                      Save Changes
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 border-4 border-gray-200 relative group">
                    <img 
                      src={photoFile ? URL.createObjectURL(photoFile) : profilePhoto} 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                    />
                    
                    {isEditing && (
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={triggerFileInput}
                      >
                        <Upload className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  {isEditing && (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <Button 
                        className="mb-4 md:mb-0 bg-ucash hover:bg-ucash-dark text-white"
                        onClick={triggerFileInput}
                      >
                        Change Photo
                      </Button>
                    </>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    {isEditing ? (
                      <Input 
                        name="fullName"
                        value={userData.fullName}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5">{userData.fullName}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
                    {isEditing ? (
                      <Input 
                        type="date"
                        name="birthday"
                        value={userData.birthday}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5">
                        {new Date(userData.birthday).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    {isEditing ? (
                      <Input 
                        type="tel"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5">{userData.phoneNumber}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    {isEditing ? (
                      <Input 
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5">{userData.email}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                    {isEditing ? (
                      <Input 
                        name="nationality"
                        value={userData.nationality}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5">{userData.nationality}</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Change Account Password</label>
                    {isEditing ? (
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={userData.password}
                          onChange={handleInputChange}
                          className="w-full pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-2.5 flex justify-between items-center">
                        <span>********</span>
                        <Eye size={18} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
                
                {isEditing && (
                  <div className="mt-8 flex justify-end">
                    <Button 
                      variant="outline" 
                      onClick={handleCancel} 
                      className="mr-3"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSave} 
                      className="bg-ucash-dark hover:bg-ucash text-white"
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Account;
