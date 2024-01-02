import React, { useContext, useState } from "react";
import "./signin.css";
//import { Logincontext } from '../context/Contextprovider';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logincontext } from "../context/ContextProvider";

const Signin = () => {
  const { account, setAccount } = useContext(Logincontext);
  const [logdata, setdata] = useState({
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setdata(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };
  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    // console.log(email);
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data.userlogin);

      if (res.status === 400 || !data) {
        console.log("invalid details");
        toast.warn("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        //  setAccount(data);
        // setdata({ ...logdata, email: "", password: "" })
        console.log("data valid");
        setAccount(data);
        toast.success("Login Successfully done 😃!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("login page ka error" + error.message);
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="quantum.png" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign IN</h1>
            <div className="form_data">
              <label>Email</label>
              <input
                type="email"
                onChange={adddata}
                value={logdata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={logdata.password}
                id="password"
                placeholder="Atleast 6 Characters"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Continue
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New To Quantum</p>
          <NavLink to="/register">
            <button>Create Your Quantum Account</button>{" "}
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signin;
