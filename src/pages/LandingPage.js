import {
    FormControl,
    InputLabel,
    MenuItem,
    FormHelperText,
    Select,
    Button,
    Icon,
    Button as MuiButton,
  } from "@mui/material";
  import { Input } from "@chakra-ui/react";
  import "./LandingPage.css";
  import { useNavigate  } from "react-router-dom";
import Login from "./Login";
  
  const LandingPage = () => {
    const navigate = useNavigate();
    const login=()=>{
      navigate("/login");
    }
    const register=()=>{
      navigate("/signup");
    }
    return (
      <div className="landing-page">
        <div className="landing-page-child" />
        <div className="landing-page-item" />
        <div className="landing-page-inner" />
        <img className="rectangle-icon" alt="" src="/rectangle-48@2x.png" />
        <div className="line-div" />
        <img className="star-icon" alt="" src="/star-2.svg" />
        <img className="landing-page-child1" alt="" src="/star-2.svg" />
        <img className="landing-page-child2" alt="" src="/star-2.svg" />
        <img className="landing-page-child3" alt="" src="/star-2.svg" />
        <img className="landing-page-child4" alt="" src="/star-9.svg" />
        <div className="rectangle-div" />
        <div className="landing-page-child5" />
        <div className="active-offers">+10 active offers</div>
        <div className="hm">{`H&M`}</div>
        <div className="landing-page-child6" />
        <img className="landing-page-child7" alt="" src="/rectangle-481@2x.png" />
        <div className="landing-page-child8" />
        <img className="landing-page-child9" alt="" src="/star-2.svg" />
        <img className="landing-page-child10" alt="" src="/star-2.svg" />
        <img className="landing-page-child11" alt="" src="/star-2.svg" />
        <img className="landing-page-child12" alt="" src="/star-2.svg" />
        <img className="landing-page-child13" alt="" src="/star-9.svg" />
        <div className="landing-page-child14" />
        <div className="landing-page-child15" />
        <div className="active-offers1">+10 active offers</div>
        <div className="starbucks">Starbucks</div>
        <div className="landing-page-child16" />
        <div className="landing-page-child17" />
        <div className="landing-page-child18" />
        <div className="landing-page-child19" />
        <div className="hm1">{`H&M`}</div>
        <img className="landing-page-child20" alt="" src="/rectangle-30@2x.png" />
        <div className="landing-page-child21" />
        <div className="div">₹500</div>
        <div className="landing-page-child22" />
        <img className="icon-link-alt" alt="" src="/-icon-link-alt.svg" />
        <div className="landing-page-child23" />
        <div className="landing-page-child24" />
        <div className="landing-page-child25" />
        <div className="landing-page-child26" />
        <div className="nescafe">Nescafe</div>
        <img
          className="landing-page-child27"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <div className="landing-page-child28" />
        <div className="buy-1-get">Buy 1 get 1 free</div>
        <div className="landing-page-child29" />
        <img className="icon-link-alt1" alt="" src="/-icon-link-alt1.svg" />
        <div className="landing-page-child30" />
        <div className="home">Home</div>
        <div className="div1">6481651891</div>
        <div className="andheri-west-mumbai">
          Andheri West, Mumbai, Maharashtra
        </div>
        <div className="couponcafegmailcom">couponcafe@gmail.com</div>
        <div className="brands">Brands</div>
        <div className="notifications">Notifications</div>
        <div className="landing-page-child31" />
        <img
          className="drawkit-vector-illustration-bl"
          alt=""
          src="/drawkit-vector-illustration-black-friday--online-shopping-1-1.svg"
        />
        <div className="coupons">Coupons</div>
        <div className="what-are-users">What are users want to say</div>
        <div className="collection-offers">{`Collection offers.. `}</div>
        <div className="the-source-of-container">
          <p className="the-source">{`The source `}</p>
          <p className="of-all-codes-and-coupons">
            <span className="of-all">{`of all `}</span>
            <span className="codes-and-coupons">Codes and Coupons</span>
          </p>
        </div>
        <div className="the-source-of-container1">
          <p className="the-source">{`The source `}</p>
          <p className="of-all-codes-and-coupons">
            <span className="of-all">{`of all `}</span>
            <b className="codes-and-coupons1">Codes and Coupons</b>
          </p>
        </div>
        <div className="just-search-find-container">
          <span>{`Just search, find and get your `}</span>
          <span className="discount-code">Discount code</span>
        </div>
        <div className="landing-page-child32" />
        <b className="b">5000</b>
        <b className="b1">350</b>
        <b className="b2">5000</b>
        <div className="discount-offers">Discount offers</div>
        <img className="icon-search" alt="" src="/-icon-search.svg" />
        <div className="partnership-brands">Partnership brands</div>
        <div className="store-locations">Store locations</div>
        <img className="landing-page-child33" alt="" src="/rectangle-14@2x.png" />
        <div className="landing-page-child34" />
        <img className="landing-page-child35" alt="" src="/rectangle-15@2x.png" />
        <img className="landing-page-child36" alt="" src="/rectangle-16@2x.png" />
        <img className="landing-page-child37" alt="" src="/rectangle-17@2x.png" />
        <img className="landing-page-child38" alt="" src="/rectangle-18@2x.png" />
        <img className="landing-page-child39" alt="" src="/rectangle-19@2x.png" />
        <img className="landing-page-child40" alt="" src="/rectangle-20@2x.png" />
        <img className="landing-page-child41" alt="" src="/rectangle-21@2x.png" />
        <img className="landing-page-child42" alt="" src="/rectangle-22@2x.png" />
        <img className="landing-page-child43" alt="" src="/rectangle-23@2x.png" />
        <div className="landing-page-child44" />
        <div className="landing-page-child45" />
        <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
        <div className="kate-brown">Kate Brown</div>
        <div className="div2">4.5</div>
        <img className="landing-page-child46" alt="" src="/star-10.svg" />
        <div className="the-variety-of">{`The variety of discounts here are amazing. Loved using coupons for shopping. `}</div>
        <div className="landing-page-child47" />
        <img className="landing-page-child48" alt="" src="/ellipse-11@2x.png" />
        <div className="amelia">{`Amelia `}</div>
        <div className="div3">4.5</div>
        <img className="landing-page-child49" alt="" src="/star-101.svg" />
        <div className="very-useful-tool">
          Very useful tool to keep track of where your customers are coming from
          if you use coupon codes to bring customers from a 3rd party app or site
          to shop on your own website
        </div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="group-item" alt="" src="/ellipse-12@2x.png" />
          <div className="emily">Emily</div>
          <div className="div4">4.5</div>
          <img className="group-inner" alt="" src="/star-102.svg" />
          <div className="tested-the-app">
            Tested the app for future usage. Super easy to use and self
            explanatory. Definitely can recommend it.
          </div>
        </div>
        <div className="quick-links">QUICK LINKS</div>
        <div className="contact">CONTACT</div>
        <img className="icon-location" alt="" src="/-icon-location.svg" />
        <img className="icon-email" alt="" src="/-icon-email.svg" />
        <img className="icon-call" alt="" src="/-icon-call.svg" />
        <img className="landing-page-child50" alt="" src="/rectangle-64@2x.png" />
        <img className="landing-page-child51" alt="" src="/rectangle-65@2x.png" />
        <img className="landing-page-child52" alt="" src="/rectangle-64@2x.png" />
        <img className="landing-page-child53" alt="" src="/rectangle-65@2x.png" />
        <FormControl
          className="selectoutlined"
          sx={{ width: 220 }}
          variant="outlined"
        >
          <InputLabel color="primary">Categories</InputLabel>
          <Select color="primary" size="medium" label="Categories">
            <MenuItem value="Fashion">Fashion</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Cosmetics">Cosmetics</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Home applications">Home applications</MenuItem>
            <MenuItem value="Beverages">Beverages</MenuItem>
            <MenuItem value="Groceries">Groceries</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="selectoutlined1"
          sx={{ width: 220 }}
          variant="outlined"
        >
          <InputLabel color="primary">Discount Range</InputLabel>
          <Select color="primary" size="medium" label="Discount Range">
            <MenuItem value="10% - 20%">10% - 20%</MenuItem>
            <MenuItem value="20% - 30%">20% - 30%</MenuItem>
            <MenuItem value="30% - 40%">30% - 40%</MenuItem>
            <MenuItem value="40% - 50%">40% - 50%</MenuItem>
            <MenuItem value="Above 50%">Above 50%</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Button
          className="buttoncontained-text"
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        <Button className="buttontext-only" variant="text" color="primary">
          Go to site
        </Button>
        <Button className="buttontext-only1" variant="text" color="primary">
          Go to site
        </Button>
        <Button
          className="buttonoutlined-text"
          sx={{ width: 160 }}
          variant="outlined"
          color="primary"
        >
          See the code
        </Button>
        <Button
          className="buttonoutlined-text1"
          sx={{ width: 160 }}
          variant="outlined"
          color="primary"
        >
          See the code
        </Button>
        <div className="landing-page-child54" />
        <div className="landing-page-child55" />
        <div className="landing-page-child56" />
        <div className="landing-page-child57" />
        <div className="starbucks1">Starbucks</div>
        <img className="landing-page-child58" alt="" src="/rectangle-72@2x.png" />
        <div className="landing-page-child59" />
        <div className="div5">₹500</div>
        <div className="landing-page-child60" />
        <img className="icon-link-alt2" alt="" src="/-icon-link-alt2.svg" />
        <div className="landing-page-child61" />
        <div className="landing-page-child62" />
        <div className="landing-page-child63" />
        <div className="landing-page-child64" />
        <div className="nescafe1">Nescafe</div>
        <img
          className="landing-page-child65"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <div className="landing-page-child66" />
        <div className="buy-2-get">Buy 2 get 1 free</div>
        <div className="landing-page-child67" />
        <img className="icon-link-alt3" alt="" src="/-icon-link-alt3.svg" />
        <Button className="buttontext-only2" variant="text" color="primary">
          Go to site
        </Button>
        <Button className="buttontext-only3" variant="text" color="primary">
          Go to site
        </Button>
        <Button
          className="buttonoutlined-text2"
          sx={{ width: 160 }}
          variant="outlined"
          color="primary"
        >
          See the code
        </Button>
        <Button
          className="buttonoutlined-text3"
          sx={{ width: 160 }}
          variant="outlined"
          color="primary"
        >
          See the code
        </Button>
        <Button
          className="buttoncontained-text1"
          variant="contained"
          color="primary"
        >
          List
        </Button>
        <Button
          className="buttoncontained-text2"
          variant="contained"
          color="primary"
        >
          List
        </Button>
        <img className="landing-page-child68" alt="" src="/rectangle-80@2x.png" />
        <img className="landing-page-child69" alt="" src="/rectangle-81@2x.png" />
        <Input
        className="inputflushed"
        variant="flushed"
        width="402px"
        placeholder="Search"
        w="402px"
      />
        <MuiButton onClick={login}
          className="buttonoutlined-text4"
          variant="outlined"
          color="primary"
        >
          Login
        </MuiButton>
        <MuiButton onClick={register} className="buttontext-only4" variant="text" color="primary">
          Register
        </MuiButton>
        <img className="landing-page-child70" alt="" src="/star-1.svg" />
        <div className="landing-page-child71" />
        <img className="landing-page-child72" alt="" src="/ellipse-6.svg" />
      </div>
    );
  };
  
  export default LandingPage;
  