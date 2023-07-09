

import React from 'react'
import ProductDetail from '../features/product/components/ProductDetail'
import Navbar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

const UserOrdersPage = () => {
    return (
        <Navbar>
            <h1 className="mx-auto text-2xl"> My Orders</h1>
            <UserOrders />
        </Navbar>
    )
}

export default UserOrdersPage;