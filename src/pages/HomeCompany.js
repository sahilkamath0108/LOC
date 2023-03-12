import { FormControlLabel, Checkbox, Button } from "@mui/material";
import "./HomeCompany.css";

const HomeCompany = () => {
  return (
    <div className="homecompany">
      <img className="homecompany-child" alt="" src="/rectangle-86.svg" />
      <img className="homecompany-item" alt="" src="/rectangle-87.svg" />
      <img className="homecompany-inner" alt="" src="/rectangle-5@2x.png" />
      <img className="homecompany-child1" alt="" src="/rectangle-6@2x.png" />
      <a className="home2">Home</a>
      <a className="brands1">Generate</a>
      <a className="notifications1">Notifications</a>
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
      
    </div>
  );
};

export default HomeCompany;
