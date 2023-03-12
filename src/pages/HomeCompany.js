import { FormControlLabel, Checkbox, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import "./HomeCompany.css";


  const HomeCompany = () => {
    // let cpnbtn = document.getElementById("cpnbtn");
    // let cpncode = document.getElementById("cpncode");
    // cpnbtn.onclick = ()=>{
    //     navigator.clipboard.writeText(cpncode.innerHTML);
    //     cpnbtn.innerHTML="Copied!";
     
    // }

    const [coupons, setCoupons] = useState([]);
    const navigate = useNavigate();
    const generatecoupon=()=>{
      navigate("/CouponGenerator");
    }
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/company/allCoupons", {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjOWQ4MTY2Y2IyYTc2M2M5MDg0NjgiLCJpYXQiOjE2Nzg1OTM2MTl9.pUEqBDLrzf6898PTumtZTWxxh1rftNS_EqoJMhl9O00",
            },
          });
          setCoupons(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  

  return (
    <div className="homecompany">

      <img className="homecompany-inner" alt="" src="/rectangle-5@2x.png" />
      <img className="homecompany-child1" alt="" src="/rectangle-6@2x.png" />
      <a className="home2">Home</a>
      <a className="brands1" onClick={generatecoupon} >Generate Coupons</a>
     
      <img className="profile" alt="" src="https://source.unsplash.com/random/1000x1000/?girl" />
      <div className="homecompany-child2" />
      <b className="filters1">Filters</b>
      <div className="category1">Category</div>
      <div className="coupons-posted-by1">
        Coupons Posted By Other Companies
      </div>
      <div className="discount-range1">Discount Range</div>
      <img
        className="icon-chevron-right1"
        alt=""
        src="/-icon-chevron-right.svg"
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and15"
        label="Fashion"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and16"
        label="Electronics"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and17"
        label="Food"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and18"
        label="Cosmetics"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and19"
        label="Health"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and20"
        label="Finance"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and21"
        label="Education"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and22"
        label="Home Applications"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and23"
        label="Beverages"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and24"
        label="Groceries"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and25"
        label="10% - 20%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and26"
        label="20% - 30%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and27"
        label="30% - 40%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and28"
        label="40% - 50%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className="checkboxdefault-checkbox-and29"
        label="Above 50%"
        labelPlacement="end"
        control={<Checkbox color="primary" size="medium" />}
      />
      
     <div className="main">

      {coupons.map((coupon) => (
         <Grid item xs={12} md={6} lg={3} className='card'>
      <div className='ccard'>
        <div className='coupon-card'>
   <h2>{coupon.companyName}</h2>
            <h3>{coupon.detail}</h3>
            <p>Expires in :{coupon.expiresInDays} Days</p>
            <div className='coupon-row'>
                <span id='cpncode'>iudbcim</span>
                <span id='cpnbtn'>Copy Code</span>
            </div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
    </div>

        </Grid>
      
      ))}
   
   </div>
    </div>
  );
};

export default HomeCompany;
