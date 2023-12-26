import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cart.css';
import { Divider } from '@mui/material';
const Cart = () => {

  const { id } = useParams("");

  const [inddata,setInddata] = useState([]);
  //console.log(inddata)   //time 4:32:29
  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json()
    //console.log(data)
    if (res.status !==201){
      console.log("no data available")
    }else{
      console.log("get data")
      setInddata(data)
    }
  };
 
  useEffect(()=>{
    getinddata();

  },[id]);


  
  return (
    <div className='cart_section'>
    { inddata && Object.keys(inddata).length && 
      <div className='cart_container'>
        <div className='left_cart'>
        <img src={inddata.url}/>
        <div className='cart_btn'>
        <button className='cart_btn1'>Add to Cart</button>
        <button className='cart_btn2'>Buy Now</button>
        </div>
        </div>
        <div className='right_cart'>
        <h3>{inddata.title.shortTitle}</h3>
        <h4>{inddata.title.longTitle}</h4>
        <Divider/>
        <p className='mrp'>M.R.P. :${inddata.price.mrp}</p>
        <p>Deal of The Day: <span style={{color:"#B127405"}}>$ {inddata.price.cost}.00</span></p>
        <p>You Save: ; <span style={{color:"#B127405"}}>${inddata.price.mrp - inddata.price.cost } ({inddata.price.discount}) </span></p>
        <div className='discount_box'>
        <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
        <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
        <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
        </div>
        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
        </div>
      </div>
    }
    </div>
  )
}

export default Cart;
