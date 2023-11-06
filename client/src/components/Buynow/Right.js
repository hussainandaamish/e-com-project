import React from 'react';
import './buynow.css'

const Right = () => {
  return (
    <div className='right_buy'>
       <img src='Attendnce.png'/>  
      <div className='cost_right'>
        <p>Your order is eligible for Free Deilvery</p>
        <span style={{color:"565959"}}>Select this option at checkout. Deatils</span>
        <h3>Subtotal (1 item):<strong style={{fontWeight:"700"}}> Rs 4949.00</strong></h3>
        <button className='rightbuy_btn'>Proceed to Buy</button>
        <div className='emi'>
        <p>EMI Available</p>
        </div>
      </div>
    </div>
  )
}

export default Right
