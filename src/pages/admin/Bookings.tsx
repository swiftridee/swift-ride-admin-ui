
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Bookings = () => {
  const bookings = [
    {
      id: '#12345',
      userName: 'Sophia Clark',
      vehicle: 'Toyota',
      rentalPlan: '1 Week',
      driverOption: 'With Driver',
      price: 'PKR 36,000',
      status: 'Completed'
    },
    {
      id: '#12346',
      userName: 'Ethan Bennett',
      vehicle: 'Yutong',
      rentalPlan: '12 Hour',
      driverOption: 'Without Driver',
      price: 'PKR 17,000',
      status: 'Pending'
    },
    {
      id: '#12347',
      userName: 'Olivia Carter',
      vehicle: 'Honda',
      rentalPlan: '3 Day',
      driverOption: 'With Driver',
      price: 'PKR 18,000',
      status: 'Completed'
    },
    {
      id: '#12348',
      userName: 'Liam Davis',
      vehicle: 'MAN',
      rentalPlan: '2 Day',
      driverOption: 'Without Driver',
      price: 'PKR 48,000',
      status: 'Cancelled'
    },
    {
      id: '#12349',
      userName: 'Ava Evans',
      vehicle: 'Toyota Coaster',
      rentalPlan: '12 Hour',
      driverOption: 'With Driver',
      price: 'PKR 14,500',
      status: 'Pending'
    },
    {
      id: '#12350',
      userName: 'Noah Foster',
      vehicle: 'BMW',
      rentalPlan: '1 Week',
      driverOption: 'Without Driver',
      price: 'PKR 28,000',
      status: 'Completed'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case 'Cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Bookings</h1>
          <p className="text-gray-600 mt-2">View and manage all vehicle bookings</p>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>User Name</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Rental Plan</TableHead>
                  <TableHead>Driver Option</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell className="text-blue-600">{booking.userName}</TableCell>
                    <TableCell>{booking.vehicle}</TableCell>
                    <TableCell className="text-blue-600">{booking.rentalPlan}</TableCell>
                    <TableCell>{booking.driverOption}</TableCell>
                    <TableCell className="font-medium">{booking.price}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Bookings;
