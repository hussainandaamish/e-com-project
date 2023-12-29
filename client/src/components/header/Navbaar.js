import {React, useContext} from 'react';
import './navbaar.css';
import Avatar from '@mui/material/Avatar';
import Searchicon from '@mui/icons-material/Search';
import { Logincontext } from "../context/ContextProvider";
import Badge from '@mui/material/Badge';
import  ShoppingCart  from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';


const Navbaar=()=>{
  const { account, setAccount } = useContext(Logincontext);
  console.log(account)
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
                {
                        account ? <NavLink to="/buynow">
                            <div className="cart_btn">
                                <Badge badgeContent={account.carts.length} color="secondary">
                                    <i className="fas fa-shopping-cart" id="icon"></i>
                                </Badge>

                                <p>Cart</p>
                            </div>
                        </NavLink> : <NavLink to="/login">
                            <div className="cart_btn">
                                <Badge badgeContent={0} color="secondary">
                                    <i className="fas fa-shopping-cart" id="icon"></i>
                                </Badge>
                                <p>Cart</p>
                            </div>
                        </NavLink>
                    }


                    {
                        account ?
                            <Avatar className="avtar">{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className="avtar"/>
                    }
              </div>
            </nav>
          </header>
        );
}
export default Navbaar;