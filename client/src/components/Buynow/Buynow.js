import React from 'react';
import './buynow.css'
import { Divider } from '@mui/material';
import Subtotal from './Subtotal';
import Option from './Option';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className='leftbuy'>Price</span>
            <Divider/>

            <div className='item_containert'>
              <img src='https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70'/>
              <div className='item_details'>
                <h3>Molife Sense 5 watches(black strap, free size)</h3>
                <h3>Smart Watches</h3>
                <h3 className='different_price'>$499.00</h3>
                <p className='unusuall'>Usually Dispatched in 8 days</p>
                <p>ELigible for free Shipping</p>
                <img src='attendnce.png'/>
                <Option/>
              </div>
              <h3 className='item_price'></h3>
            </div>
            <Divider/>
            <Subtotal/>
            
        </div>
        <Right/>
      </div>
    </div>
  )
}

export default Buynow;
