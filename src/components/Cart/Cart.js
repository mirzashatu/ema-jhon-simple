import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    // const total=cart.reduce((total,pd)=>total+pd.price,0)
    let total=0
    for (let i = 0; i < cart.length; i++) {
        const product=cart[i]
        total=total+product.price
        
    }

    let shipping=0
    if (total>35){
        shipping=0
    }
    else if(total>15){
        shipping=4.55
    }
    else if(total>0){
        shipping=12.99
    }
    const tax=Math.round(total/10)
    const grandTotal=(total+shipping+tax)
    const numberFormat=num=>{
        const precision=num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>product Price{total}</p>
            <p><small>Shipping Cost:{numberFormat(shipping)}</small></p>
            <p><small>TAx+vat:{numberFormat(tax)}</small></p>
            <p>Total Price:{numberFormat(grandTotal)}</p>
            
        </div>
    );
};

export default Cart;