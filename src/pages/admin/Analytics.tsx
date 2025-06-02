
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';

const Analytics = () => {
  const bookingTrendsData = [
    { day: 'Mon', bookings: 245 },
    { day: 'Tue', bookings: 312 },
    { day: 'Wed', bookings: 389 },
    { day: 'Thu', bookings: 456 },
    { day: 'Fri', bookings: 523 },
    { day: 'Sat', bookings: 634 },
    { day: 'Sun', bookings: 578 }
  ];

  const popularVehiclesData = [
    { vehicle: 'Sedan', count: 89 },
    { vehicle: 'SUV', count: 76 },
    { vehicle: 'Truck', count: 45 },
    { vehicle: 'Van', count: 32 },
    { vehicle: 'Motorcycle', count: 23 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 15000 },
    { month: 'Feb', revenue: 18200 },
    { month: 'Mar', revenue: 16800 },
    { month: 'Apr', revenue: 22500 },
    { month: 'May', revenue: 21800 },
    { month: 'Jun', revenue: 25000 },
    { month: 'Jul', revenue: 23200 },
    { month: 'Aug', revenue: 27800 },
    { month: 'Sep', revenue: 26500 },
    { month: 'Oct', revenue: 29200 },
    { month: 'Nov', revenue: 31500 },
    { month: 'Dec', revenue: 34000 }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Track key performance indicators and trends for Swift Ride.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Select defaultValue="30days">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
              <SelectItem value="van">Van</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Trends */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Booking Trends</CardTitle>
              <div className="space-y-2">
                <div className="text-2xl font-bold">1200</div>
                <p className="text-sm text-gray-600">
                  This Month <span className="text-green-600">+15%</span>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bookingTrendsData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis hide />
                    <Bar dataKey="bookings" fill="#E5E7EB" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Popular Vehicles */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Popular Vehicles</CardTitle>
              <div className="space-y-2">
                <div className="text-2xl font-bold">150</div>
                <p className="text-sm text-gray-600">
                  This Month <span className="text-green-600">+10%</span>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularVehiclesData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.vehicle}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${(item.count / 100) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-8">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Growth */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Revenue Growth</CardTitle>
              <div className="space-y-2">
                <div className="text-2xl font-bold">$25,000</div>
                <p className="text-sm text-gray-600">
                  This Year <span className="text-green-600">+20%</span>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: '#6B7280' }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
