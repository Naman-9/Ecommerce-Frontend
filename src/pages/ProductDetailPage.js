import React from 'react'
import ProductDetail from '../features/product/components/ProductDetail'
import Navbar from '../features/navbar/Navbar';
import Footer from '../features/common/Footer';

const ProductDetailPage = () => {
  return (
    <>
    <Navbar>
        <ProductDetail />
    </Navbar>
    <Footer />
    </>

  )
}

export default ProductDetailPage;