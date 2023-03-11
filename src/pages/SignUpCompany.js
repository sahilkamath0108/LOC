import { useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./SignUpCompany.css";

const SignUpCompany = () => {
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
    <div className="signup-company">
      <div className="join-now-to">Join now to create offers</div>
      <b className="create-an-account">Create an account</b>
      <Link className="already-have-an-container" to="/login">
        <span>Already have an account?</span>
        <span className="span">{` `}</span>
        <span className="login">Login</span>
      </Link>
      <TextField
        className="inputoutlined"
        sx={{ width: 422 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Company Name"
        size="medium"
        margin="none"
      />
      <TextField
        className="inputoutlined1"
        sx={{ width: 422 }}
        color="primary"
        variant="outlined"
        type="password"
        label="Password"
        size="medium"
        margin="none"
      />
      <TextField
        className="inputoutlined2"
        sx={{ width: 422 }}
        color="primary"
        variant="outlined"
        type="email"
        label="Email"
        size="medium"
        margin="none"
      />
      <TextField
        className="inputoutlined3"
        sx={{ width: 207 }}
        color="primary"
        variant="outlined"
        type="tel"
        label="Phone Number"
        size="medium"
        margin="none"
      />
      <Button
        className="buttoncontained-text"
        sx={{ width: 422 }}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
      <img className="signup-company-child" alt="" src="/rectangle-5@2x.png" />
      <img className="signup-company-item" alt="" src="/rectangle-6@2x.png" />
      <FormControl
        className="selectoutlined"
        sx={{ width: 204 }}
        variant="outlined"
      >
        <InputLabel color="primary">Category</InputLabel>
        <Select color="primary" size="medium" label="Category">
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Cosmetics">Cosmetics</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Home Appliances">Home Appliances</MenuItem>
          <MenuItem value="Beverages">Beverages</MenuItem>
          <MenuItem value="Groceries">Groceries</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <img
        className="won-3-icon"
        alt="Coupon Illustration"
        src="/won-3.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default SignUpCompany;
