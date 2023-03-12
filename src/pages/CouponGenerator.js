import { Button } from "@mui/material";
import "./CouponGenerator.css";
import { useNavigate  } from "react-router-dom";

const CouponGenerator = () => {
    const navigate = useNavigate();
    const home_company=()=>{
      navigate("/HomeCompany");
    }
    const static_coupon=()=>{
        navigate("/StaticCoupon")
    }
  return (
    <div className="coupon-generator">
      <img
        className="coupon-generator-child"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <img className="coupon-generator-item" alt="" src="/rectangle-6@2x.png" />
      <a className="home1" onClick={home_company}>Home</a>
      <a className="generate" >Generate Coupons</a>

      <img className="coupon-generator-inner" alt="" src="/ellipse-1@2x.png" />
      <div className="coupon-generator-child1" />
      <img className="coupon-generator-child2" alt="" src="/group-11.svg" />
      <img className="coupon-generator-child3" alt="" src="/group-12.svg" />
      <Button
        className="buttonoutlined-text5"
        variant="outlined"
        color="primary"
        size="large"
      >
        Personalized Coupon
      </Button>
      <Button onClick={static_coupon}
        className="buttonoutlined-text6"
        variant="outlined"
        color="primary"
      >
        Static
      </Button>
    </div>
  );
};

export default CouponGenerator;
