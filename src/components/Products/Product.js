import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product
    return (
        <div className="product-value">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} in stock,order now</small></p>
                <button className="main-button"

                    onClick={()=>props.handleAddProduct(props.product)}>

                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
        </div>
    );
};

export default Product;