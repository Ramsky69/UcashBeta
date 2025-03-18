
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Handle login logic here
    toast({
      title: "Login successful!",
      description: "Redirecting to dashboard...",
    });
    
    // Simulate redirection after login
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-ucash-dark flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex justify-center md:justify-start">
            <Logo />
          </div>
          
          <div className="text-center md:text-left mb-12">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-gray-400">
              Please sign in to access your account and continue managing your finances
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                className="w-[48%] bg-transparent border border-gray-600 text-white hover:bg-gray-800"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button 
                variant="outline" 
                className="w-[48%] bg-transparent border border-gray-600 text-white hover:bg-gray-800"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Apple" className="w-5 h-5 mr-2" />
                Apple
              </Button>
            </div>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-gray-400">or with email</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-ucash-dark mb-8 text-center">LOGIN</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="input-field"
              />
            </div>
            
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-field"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <Button type="submit" className="w-full bg-ucash-dark hover:bg-ucash text-white">
              SIGN IN
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              By signing in, You agree to the 
              <Link to="/terms" className="text-blue-600 hover:underline ml-1">
                Terms, Conditions and Policies
              </Link> of UCASH & Privacy Policy
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              OR
            </p>
            <p className="mt-2">
              Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
