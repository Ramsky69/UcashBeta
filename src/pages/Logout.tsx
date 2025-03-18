
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const Logout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // If dialog is closed without action, redirect to dashboard
    if (!open) {
      navigate('/dashboard');
    }
  }, [open, navigate]);

  const handleLogout = () => {
    // In a real app with backend, this would call an API to invalidate tokens
    // For now, we'll just remove the isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    
    // Show success toast
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    
    // Redirect to login page
    navigate('/login');
  };
  
  const handleCancel = () => {
    setOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be logged out of your UCASH account and redirected to the login page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout} className="bg-ucash-dark">Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </main>
      </div>
    </div>
  );
};

export default Logout;
