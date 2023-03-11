import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import { Link,useNavigate  } from "react-router-dom";
import "./SignUpUser.css";
import axios from "axios"




const SignUpUser = () => {

  const [user, setUser]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    number:null
  })

  const handleChange=e=>{
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value,
    })
    
  }
  const navigate = useNavigate();

  const register=()=>{
    const {fname,lname,email,password,number}=user
    if(fname && lname && email && password && number)
    {
     
      axios.post("http://localhost:3001/user/new",user)
      .then(res=>console.log(res))
      navigate("/Home");
    }
    else{
      alert("Please fill all fileds")
    }
  }
  
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    
    <div className="signup-user">
      {console.log("User",user)}
      <div className="join-now-for">Join now for offers!</div>
      <b className="create-an-account1">Create an account</b>
      <Link className="already-have-an-container1" to="/login">
        <span>Already have an account?</span>
        <span className="span1">{` `}</span>
        <span className="login1">Login</span>
      </Link>
      <TextField
      name="fname"
      value={user.fname}
        className="inputoutlined4"
        sx={{ width: 207 }}
        color="primary"
        variant="outlined"
        type="text"
        label="First Name"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <TextField
      name="lname"
      value={user.lname}
        className="inputoutlined5"
        sx={{ width: 207 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Last Name"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <TextField
      name="password"
      value={user.password}
        className="inputoutlined6"
        sx={{ width: 422 }}
        color="primary"
        variant="outlined"
        type="password"
        label="Password"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <TextField
      name="email"
      value={user.email}
        className="inputoutlined7"
        sx={{ width: 207 }}
        color="primary"
        variant="outlined"
        type="email"
        label="Email"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <TextField
      name="number"
      value={user.number}
        className="inputoutlined8"
        sx={{ width: 207 }}
        color="primary"
        variant="outlined"
        type="tel"
        label="Phone Number"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <Button
      onClick={register}
        className="buttoncontained-text1"
        sx={{ width: 422 }}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
      <img className="signup-user-child" alt="" src="/rectangle-5@2x.png" />
      <img className="signup-user-item" alt="" src="/rectangle-6@2x.png" />
      <img
        className="won-3-icon1"
        alt="Coupon Illustration"
        src="/won-31.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default SignUpUser;
