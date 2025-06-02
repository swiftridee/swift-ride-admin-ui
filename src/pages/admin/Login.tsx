
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              SR
            </div>
            <span className="ml-2 text-xl font-semibold">Swift Ride</span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
          <p className="text-gray-600">Sign in to your admin account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="text-right">
              <Link 
                to="/admin/forgot-password" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/admin/signup" className="text-blue-600 hover:text-blue-800">
                Sign up here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
