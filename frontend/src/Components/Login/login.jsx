import React from 'react'
import '../Login/login.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../../Services/Auth.service';
import { useDispatch } from "react-redux";
import { userlogin } from "../../Slice/authSlice";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [msg, responseMsg] = useState();
  let navigate = useNavigate();

  // to prevent going to login page when user is logged in
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const role =useSelector((state)=>state.auth?.data?.data?.user?.role)
  // useEffect(() => {
  //   console.log("isLoggedIn",isLoggedIn,role)
  //   if (isLoggedIn) {
     
  //   }
  // }, [isLoggedIn,role])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    const res = await login(input.email, input.password);
    setLoading(true);
    console.log("resss", res);
    
    try {
      const res = await login(input.email, input.password);
      console.log("resss", res);
      if (res.data.status === "SUCCESS") {
        dispatch(userlogin(res.data));
        toast.success('Login Successful');
        const role = res?.data?.data.user?.role;
        console.log("isLoggedIn", role);
        if (role === 'admin') {
          window.location.replace("/admin/dashboard");
        } else if (role === 'video') {
          window.location.replace("/video/dashboard");
        } else if (role === "web") {
          window.location.replace("/web/dashboard");
        }
      } else {
        toast.error('Check Your Credentials Properly');
      }
    } catch (error) {
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  }


  // Validations
  const [valid, setValid] = useState({
    email: false,
    password: false,
    emailError: "",
    passwordError: "",
  });

  const validateemail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = pattern.test(email);

    if (emailIsValid) {
      setValid((previousValue) => ({
        ...previousValue,
        email: false,
        emailError: "",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        email: true,
        emailError: "Please enter your correct email",
      }));
    }
  };
  const validatepassword = (password) => {
    if (password.length < 1) {
      setValid((previousValue) => ({
        ...previousValue,
        password: true,
        passwordError: "Enter your correct password",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        password: false,
        passwordError: "",
      }));
    }
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <form action="" method="post" name="Login_Form" className="form-signin" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
            <hr className="colorgraph" />
            {/* Input Fields */}
            <input type="text" className="form-control" name="email" placeholder="Email" required="" autoFocus=""
              onBlur={(e) => validateemail(e.target.value)}
              onChange={handleChange} />
            {valid.email && (
              <span className="text-danger">{valid.emailError}</span>
            )}
            <br />
            <input type="password" className="form-control" name="password" placeholder="Password" required=""
              onBlur={(e) => validatepassword(e.target.value)}
              onChange={handleChange} />
            {valid.password && (
              <span className="text-danger">{valid.passwordError}</span>
            )}

            {/* checkbox */}
            <div className='row px-4'>
              <div className="form-check col-md-6">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">Remember me</label>
              </div>

              {/* Forget Password */}
              {/* <div className='col-md-6'>
                <Link to="/forget-password" className='d-flex flex-row-reverse'>Forget Password?</Link><br />
              </div> */}
            </div>

            {/* Login Button */}
            <div className="d-grid gap-2">
              <button className="btn btn-warning btn-lg" name="Submit" value="Login" type="Submit" onClick={loginHandler}>
                {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : "Login"}
              </button>
              {<b className="text-info">{responseMsg}</b>}
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
