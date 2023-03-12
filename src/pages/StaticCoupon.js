import {
    Button,
    Icon,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    FormHelperText,
    Select,
  } from "@mui/material";
  import "./StaticCoupon.css";
  
  const StaticCoupon = () => {
    return (
      <div className="static-coupon">
        <div className="static-coupon-child" />
        <img className="static-coupon-item" alt="" src="/rectangle-5@2x.png" />
        <img className="static-coupon-inner" alt="" src="/rectangle-6@2x.png" />
        <a className="home1">Home</a>
        <a className="generate-coupons">Generate Coupons</a>
        <img className="static-coupon-child1" alt="" src="/ellipse-1@2x.png" />
        <div className="static-coupon-child2" />
        <div className="static-coupons">{`Static Coupons `}</div>
        <div className="input">
          <div className="div6" />
        </div>
        <Button
          className="buttoncontained-text-and-ico"
          sx={{ width: 591 }}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<Icon>arrow_forward_sharp</Icon>}
        >
          Generate
        </Button>
       <img className="image_ill" src="./images/stat.png"></img>
        <TextField
          className="inputoutlined"
          sx={{ width: 591 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Details"
          size="medium"
          margin="none"
        />
        <TextField
          className="inputoutlined1"
          sx={{ width: 287 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Link"
          size="medium"
          margin="none"
        />
        <TextField
          className="inputoutlined2"
          sx={{ width: 287 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Max Outreach"
          size="medium"
          margin="none"
        />
        <TextField
          className="inputoutlined3"
          sx={{ width: 287 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Expires In How Many Days?"
          size="medium"
          margin="none"
        />
        <FormControl
          className="selectoutlined2"
          sx={{ width: 287 }}
          variant="outlined"
        >
          <InputLabel color="primary">Products</InputLabel>
          <Select color="primary" size="medium" label="Products">
            <MenuItem value="G340 Headphones">G340 Headphones</MenuItem>
            <MenuItem value="S230 Headphones">S230 Headphones</MenuItem>
            <MenuItem value="L35 Watch">L35 Watch</MenuItem>
            <MenuItem value="Z60 Earbuds">Z60 Earbuds</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    );
  };
  
  export default StaticCoupon;
  