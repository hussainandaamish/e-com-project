
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const[udata,setudata]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    }
    );

    const adddata=(e)=>{
        const{name,value}=e.target;
        setudata(()=>{
            return{
                ...udata,
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
            <h1>Sign Up</h1>
            <div className='form_data'>
            <label htmlFor='fname'>Your Name</label>
            <input type='text' name='fname' onChange={adddata} value={udata.fname} id='fname'/>
            </div>
            <div className='form_data'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={adddata} value={udata.email} id='email'/>
            </div>
            <div className='form_data'>
            <label htmlFor='number'>Mobile</label>
            <input type='text' name='mobile' onChange={adddata} value={udata.mobile} id='mobile'/>
            </div>
            <div className='form_data'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' onChange={adddata} value={udata.password}  placeholder='Atleast 6 Characters'/>
            </div>
            <div className='form_data'>
            <label htmlFor='password'>Confirm Password</label>
            <input type='password' name='cpassword' onChange={adddata} value={udata.cpassword} id='cpassword'/>
            </div>
            <button className='signin_btn'>Continue</button>
            <div className='signin_info'>
            <p>ALready have an Account?</p>
            <NavLink to='/login'>Signin</NavLink>
            </div>
        </form>
        </div>
    </div>
</section>
  )
}

export default Signup
