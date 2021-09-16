import React, { useState } from 'react';
import fakedata from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const first10=fakedata.slice(0,10);
    const [products,setproducts]=useState(first10);
    const[cart,setCart]=useState([])
    const handleAddProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
    }
    return (
       <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pro=><Product product={pro} handleAddProduct={handleAddProduct}></Product>)
                }
                  
            </div>
            <div className="product-cart">
                <Cart cart={cart}></Cart>
            </div>
       </div>
    );
};

export default Shop;