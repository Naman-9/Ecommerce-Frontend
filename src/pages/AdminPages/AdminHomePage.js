import React from 'react';
import AdminProductList from '../../features/admin/components/AdminProductList';
import Navbar from '../../features/navbar/Navbar';


const AdminHomePage = () => {
  return (
    <Navbar>
        <AdminProductList />
    </Navbar>
  )
}

export default AdminHomePage;
