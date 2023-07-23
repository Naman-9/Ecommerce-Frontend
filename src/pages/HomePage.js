import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductList from '../features/product/components/productList';
import Footer from '../features/common/Footer';


const HomePage = () => {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
      <Footer />
    </>
  )
}

export default HomePage;