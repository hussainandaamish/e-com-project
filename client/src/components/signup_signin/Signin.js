import React, { useState } from 'react';
import './signin.css';
import { NavLink } from 'react-router-dom';

const Signin = () => {
    const [logdata, setdata]=useState({
        email:"",
        password:""
    })
    const adddata=(e)=>{
        const {name,value}= e.target;
        setdata(()=>{
            return{
                ...logdata,
                [name]:value
        }
        })
    }
  return (
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='quantum.png'/>
            </div>
            <div className='sign_form'> 
            <form>
                <h1>Sign IN</h1>
                <div className='form_data'>
                <label>Email</label>
                <input type='email' 
                onChange={adddata}
                value={logdata.email}
                name='email' id='email'/>
                </div>
                <div className='form_data'>
                <label>Password</label>
                <input type='password' name='password' 
                onChange={adddata}
                value={logdata.password}
                id='password' placeholder='Atleast 6 Characters'/>
                </div>
                <button className='signin_btn'>Continue</button>
            </form>
            </div>
            <div className='create_accountinfo'>
                <p>New To Quantum</p>
               <NavLink to='/register'><button>Create Your Quantum Account</button> </NavLink> 
            </div>
        </div>
    </section>
  )
}

export default Signin;
