
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Vehicles = () => {
  const vehicles = [
    {
      image: '🚗',
      brand: 'Toyota',
      vehicleType: 'Car',
      rentalPlans: 'Daily, Weekly, Monthly',
      status: 'Available'
    },
    {
      image: '🚙',
      brand: 'Honda',
      vehicleType: 'Car',
      rentalPlans: 'Daily, Weekly',
      status: 'Unavailable'
    },
    {
      image: '🚐',
      brand: 'Ford',
      vehicleType: 'Van',
      rentalPlans: 'Daily, Weekly, Monthly',
      status: 'Available'
    },
    {
      image: '🚌',
      brand: 'Mercedes',
      vehicleType: 'Bus',
      rentalPlans: 'Daily',
      status: 'Available'
    },
    {
      image: '🚐',
      brand: 'Volkswagen',
      vehicleType: 'Mini Bus',
      rentalPlans: 'Daily, Weekly',
      status: 'Unavailable'
    },
    {
      image: '🛥️',
      brand: 'Hyundai',
      vehicleType: 'Coaster',
      rentalPlans: 'Daily',
      status: 'Available'
    },
    {
      image: '🚙',
      brand: 'Jeep',
      vehicleType: 'Car',
      rentalPlans: 'Daily, Weekly, Monthly',
      status: 'Available'
    },
    {
      image: '🚗',
      brand: 'Nissan',
      vehicleType: 'Car',
      rentalPlans: 'Daily, Weekly',
      status: 'Unavailable'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>;
      case 'Unavailable':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Unavailable</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Cars</h1>
            <p className="text-gray-600 mt-2">View and manage all vehicles in the fleet</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Add Car
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
              <SelectItem value="coaster">Coaster</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>All Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Rental Plans</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                        {vehicle.image}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{vehicle.brand}</TableCell>
                    <TableCell className="text-blue-600">{vehicle.vehicleType}</TableCell>
                    <TableCell className="text-blue-600">{vehicle.rentalPlans}</TableCell>
                    <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                          Delete
                        </Button>
                        <Button variant="outline" size="sm" className="text-gray-600 border-gray-600 hover:bg-gray-50">
                          View
                        </Button>
                      </div>
                    </TableCell>
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

export default Vehicles;
