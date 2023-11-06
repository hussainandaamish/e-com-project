import React from 'react';
import './cart.css';
import { Divider } from '@mui/material';
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
        <img src='https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70'/>
        <div className='cart_btn'>
        <button className='cart_btn1'>Add to Cart</button>
        <button className='cart_btn2'>Buy Now</button>
        </div>
        </div>
        <div className='right_cart'>
        <h3>Fitness Gear</h3>
        <h4>Pigeon Favourite Electric Kettle (1.5 Litter, Silver, Black)</h4>
        <Divider/>
        <p className='mrp'>M.R.P. :$4999</p>
        <p>Deal of The Day: <span style={{color:"#B127405"}}>$ 399.00</span></p>
        <p>You Save: ; <span style={{color:"#B127405"}}>$55 (47%)</span></p>
        <div className='discount_box'>
          <h5>Discount: <span></span></h5>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
