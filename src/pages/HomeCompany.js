import { FormControlLabel, Checkbox, Button } from "@mui/material";
import React from 'react'
import "./HomeCompany.css";
import Coupon from '../components/Coupon'

function HomeCompany() {
  return (
    <div className="homecompany">
      <img className="homecompany-child" alt="" src="/rectangle-86.svg" />
      <img className="homecompany-item" alt="" src="/rectangle-87.svg" />
      <img className="homecompany-inner" alt="" src="/rectangle-5@2x.png" />
      <img className="rectangle-icon" alt="" src="/rectangle-6@2x.png" />
      <a className="home">Home</a>
      <a className="brands">Brands</a>
      <a className="notifications">Notifications</a>
      <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
      <div className="line-div" />
      <b className="filters">Filters</b>
      <div className="category">Category</div>
      <div className="coupons-posted-by">Coupons Posted By Other Companies</div>
      <div className="discount-range">Discount Range</div>
      <img
        className="icon-chevron-right"
        alt=""
        src="/-icon-chevron-right.svg"
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and"
        label="Fashion"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and1"
        label="Electronics"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and2"
        label="Food"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and3"
        label="Cosmetics"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and4"
        label="Health"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and5"
        label="Finance"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and6"
        label="Education"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and7"
        label="Home Applications"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and8"
        label="Beverages"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and9"
        label="Groceries"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and10"
        label="10% - 20%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and11"
        label="20% - 30%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and12"
        label="30% - 40%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and13"
        label="40% - 50%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and14"
        label="Above 50%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
        
      <Coupon />
    </div>
  );
};

export default HomeCompany;
