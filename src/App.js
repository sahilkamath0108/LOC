import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignUpCompany from "./pages/SignUpCompany";
import SignUpUser from "./pages/SignUpUser";
import Login from "./pages/Login";
import { useEffect } from "react";
import Home from "./pages/Home";
import HomeCompany from "./pages/HomeCompany";
import LandingPage from "./pages/LandingPage";
import CouponGenerator from "./pages/CouponGenerator";
import StaticCoupon from "./pages/StaticCoupon";
import CouponC from "./pages/CouponC";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signupcompany":
        title = "";
        metaDescription = "";
        break;
      case "/signupuser":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signupcompany" element={<SignUpCompany />} />
      <Route path="/signupuser" element={<SignUpUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/HomeCompany" element={<HomeCompany />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/CouponGenerator" element={<CouponGenerator />} />
      <Route path="/StaticCoupon" element={<StaticCoupon />} />
      <Route path="/CouponC" element={<CouponC />} />
    </Routes>
  );
}
export default App;
