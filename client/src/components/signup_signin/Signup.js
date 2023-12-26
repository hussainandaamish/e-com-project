
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        });
 }
 const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;
    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid Details 👎!", {
                position: "top-center"
            });
        } else {
            setudata({
                ...udata, fname: "", email: "",
                mobile: "", password: "", cpassword: ""
            });
            toast.success("Registration Successfully done 😃!", {
                position: "top-center"
            });
        }
    } catch (error) {
        console.log("front end ka catch error hai" + error.message);
    }
}

  return (
    <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='quantum.png'/>
        </div>
        <div className='sign_form'> 
        <form method='POST'>
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
            <button className='signin_btn' onClick={senddata}>Continue</button>
            <div className='signin_info'>
            <p>ALready have an Account?</p>
            <NavLink to='/login'>Signin</NavLink>
            </div>
        </form>
        </div>
        <ToastContainer />
    </div>
</section>
  )
}

export default Signup
