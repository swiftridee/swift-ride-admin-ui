
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      name: 'Sophia Carter',
      email: 'sophia.carter@email.com',
      city: 'New York',
      status: 'Active'
    },
    {
      name: 'Ethan Bennett',
      email: 'ethan.bennett@email.com',
      city: 'Los Angeles',
      status: 'Active'
    },
    {
      name: 'Olivia Hayes',
      email: 'olivia.hayes@email.com',
      city: 'Chicago',
      status: 'Blocked'
    },
    {
      name: 'Liam Foster',
      email: 'liam.foster@email.com',
      city: 'Houston',
      status: 'Active'
    },
    {
      name: 'Ava Morgan',
      email: 'ava.morgan@email.com',
      city: 'Phoenix',
      status: 'Active'
    },
    {
      name: 'Noah Reed',
      email: 'noah.reed@email.com',
      city: 'Philadelphia',
      status: 'Blocked'
    },
    {
      name: 'Isabella Wright',
      email: 'isabella.wright@email.com',
      city: 'San Antonio',
      status: 'Active'
    },
    {
      name: 'Jackson Harper',
      email: 'jackson.harper@email.com',
      city: 'San Diego',
      status: 'Active'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'Blocked':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Blocked</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
          <p className="text-gray-600 mt-2">View and manage all registered users</p>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-blue-600">{user.email}</TableCell>
                    <TableCell className="text-blue-600">{user.city}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        View
                      </Button>
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

export default Users;
