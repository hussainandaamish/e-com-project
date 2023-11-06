import React from 'react';
import './navbaar.css';
import Avatar from '@mui/material/Avatar';
import Searchicon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import  ShoppingCart  from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';


const Navbaar=()=>{
        return (
          <header>
            <nav>
              <div className="left">
                <div className="navlogo">
                  {/* images logo of header */}
                <NavLink to="/"> <img src="./quantum.png" alt="" /> </NavLink>  
                </div>
                <div className="nav_searchbaar">
                  <input type="text" name="" id="" />
                  <div className="search_icon">
                  <Searchicon id='search'/>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="nav_btn">
                  <NavLink to="/login">Sign In</NavLink>
                </div>
                <div className="cart_btn">
                <Badge badgeContent={4} color="primary">
                                    <ShoppingCart id="icon"/>
                </Badge>
                </div>
                <Avatar className='avtar'/>
              </div>
            </nav>
          </header>
        );
}
export default Navbaar;