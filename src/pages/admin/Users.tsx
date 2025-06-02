
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

const Users = () => {
  const users = [
    {
      name: 'Sophia Carter',
      email: 'sophia.carter@email.com',
      city: 'Karachi',
      status: 'Active'
    },
    {
      name: 'Ethan Bennett',
      email: 'ethan.bennett@email.com',
      city: 'Lahore',
      status: 'Active'
    },
    {
      name: 'Olivia Hayes',
      email: 'olivia.hayes@email.com',
      city: 'Faisalabad',
      status: 'Blocked'
    },
    {
      name: 'Liam Foster',
      email: 'liam.foster@email.com',
      city: 'Rawalpindi',
      status: 'Active'
    },
    {
      name: 'Ava Morgan',
      email: 'ava.morgan@email.com',
      city: 'Islamabad',
      status: 'Active'
    },
    {
      name: 'Noah Reed',
      email: 'noah.reed@email.com',
      city: 'Gujranwala',
      status: 'Blocked'
    },
    {
      name: 'Isabella Wright',
      email: 'isabella.wright@email.com',
      city: 'Peshawar',
      status: 'Active'
    },
    {
      name: 'Jackson Harper',
      email: 'jackson.harper@email.com',
      city: 'Multan',
      status: 'Active'
    }
  ];

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
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-blue-600">{user.email}</TableCell>
                    <TableCell className="text-blue-600">{user.city}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
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
