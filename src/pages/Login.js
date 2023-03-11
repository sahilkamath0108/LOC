import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { Link, Redirect } from "react-router-dom"; // import Redirect component
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // state to track if user is logged in

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const login = () => {
    const { email, password } = user;
    if (!email || !password || !selectedOption) {
      alert("Please fill all fields");
      return;
    }


    const loginEndpoint =
      selectedOption === "User"
        ? "http://localhost:3001/user/login"
        : "http://localhost:3001/company/login";
    axios
      .post(loginEndpoint, user)
      .then((res) => {
        const { accessToken } = res.data;
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        setLoggedIn(true); // set loggedIn to true upon successful login
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // TODO: Make API call to get user information using the access token
    }
  }, []);
  
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
    <div className="login2">
      {console.log("User",user)}
      <div className="welcome-back">Welcome back</div>
      <b className="login-to-your">Login to your account</b>
      <Link className="dont-have-an-container" to="/">
        <span>Dont have an account?</span>
        <span className="span2">{` `}</span>
        <span className="signup1">SignUp</span>
      </Link>
      <TextField
      name="email"
      value={user.email}
        className="inputoutlined9"
        sx={{ width: 311 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Email"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <TextField
      name="password"
      value={user.password}
        className="inputoutlined10"
        sx={{ width: 312 }}
        color="primary"
        variant="outlined"
        type="password"
        label="Password"
        size="medium"
        margin="none"
        onChange={handleChange}
      />
      <Button
       onClick={login}
        className="buttoncontained-text2"
        sx={{ width: 312 }}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
      <img className="login-child" alt="" src="/rectangle-5@2x.png" />
      <img className="login-item" alt="" src="/rectangle-6@2x.png" />
      <img
        className="won-3-icon2"
        alt="Coupon Illustration"
        src="/won-32.svg"
        data-animate-on-scroll
      />
      <FormControl
        className="selectoutlined1"
        sx={{ width: 312 }}
        variant="outlined"
      >
        <InputLabel color="primary">Login as?</InputLabel>
        <Select color="primary" size="medium" label="Login as?" value={selectedOption}
          onChange={handleOptionChange}>
          <MenuItem value="User">User</MenuItem>
          <MenuItem value="Company">Company</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default Login;
