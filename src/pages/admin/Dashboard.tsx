
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Bookings Today',
      value: '25',
      change: '+5% from yesterday'
    },
    {
      title: 'Total Vehicles',
      value: '150',
      change: '+2 new this week'
    },
    {
      title: 'Total Users',
      value: '500',
      change: '+12% this month'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,500',
      change: '+15% from last month'
    }
  ];

  const chartData = [
    { name: 'Jan', value: 8000 },
    { name: 'Feb', value: 9200 },
    { name: 'Mar', value: 8800 },
    { name: 'Apr', value: 10500 },
    { name: 'May', value: 9800 },
    { name: 'Jun', value: 12500 },
    { name: 'Jul', value: 11200 }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Admin</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with Swift Ride today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-green-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Revenue Summary</CardTitle>
              <div className="space-y-2">
                <div className="text-2xl font-bold">$12,500</div>
                <p className="text-sm text-gray-600">
                  Last 12 Months <span className="text-green-600">+15%</span>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Pending Bookings</p>
                  <p className="text-sm text-gray-600">3 bookings require approval</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">3</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium">Maintenance Due</p>
                  <p className="text-sm text-gray-600">2 vehicles need service</p>
                </div>
                <div className="text-2xl font-bold text-yellow-600">2</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">Available Vehicles</p>
                  <p className="text-sm text-gray-600">Ready for booking</p>
                </div>
                <div className="text-2xl font-bold text-green-600">45</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
