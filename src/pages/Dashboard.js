import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
    const home=()=>{
      navigate("/HomeCompany");
    }
    const generatecoupons=()=>{
      navigate("/CouponGenerator");
    }
  return (
    <div className="dashboard">
      <img className="dashboard-child" alt="" src="/rectangle-5@2x.png" />
      <img className="dashboard-item" alt="" src="/rectangle-6@2x.png" />
      <a className="home" onClick={home}>Home</a>
      <a className="brands" onClick={generatecoupons}>Generate</a>
      <div className="dashboard-inner" />
      <div className="rectangle-div" />
      <div className="dashboard-child1" />
      <img
        className="undraw-statistic-chart-re-w0pk-icon"
        alt=""
        src="/undraw-statistic-chart-re-w0pk-1.svg"
      />
      <div className="dashboard-child2" />
      <div className="dashboard-child3" />
      <div className="dashboard-child4" />
      <div className="dashboard-child5" />
      <div className="dashboard-child6" />
      <div className="div">----</div>
      <div className="line-div" />
      <div className="dashboard-child7" />
      <div className="gt20-headphones">GT20 Headphones</div>
      <div className="s320-headphones">S320 Headphones</div>
      <div className="l35-watch">{`L35 Watch `}</div>
      <div className="z60earbuds">Z60Earbuds</div>
      <div className="sales">Sales</div>
      <div className="capacity">Capacity</div>
      <div className="dashboard-child8" />
      <div className="dashboard-child9" />
      <div className="div1">0</div>
      <div className="div2">30</div>
      <div className="div3">40</div>
      <div className="div4">50</div>
      <div className="div5">60</div>
      <div className="div6">70</div>
      <div className="div7">80</div>
      <div className="div8">90</div>
      <div className="div9">100</div>
      <div className="div10">20</div>
      <div className="div11">10</div>
      <div className="dashboard-child10" />
      <div className="tech-coupons-can">
        Tech coupons can be a great way to save money on your favorite tech
        products.
      </div>
      <img className="ellipse-icon" alt="" src="/ellipse-2@2x.png" />
      <a className="karen">{`Karen `}</a>
      <img className="star-icon" alt="" src="/star-11.svg" />
      <img className="dashboard-child11" alt="" src="/star-11.svg" />
      <img className="dashboard-child12" alt="" src="/star-11.svg" />
      <img className="dashboard-child13" alt="" src="/star-11.svg" />
      <img className="dashboard-child14" alt="" src="/star-15.svg" />
      <div className="dashboard-child15" />
      <div className="tech-coupons-can1">
        Tech coupons can be a great way to save money on your favorite tech
        products.
      </div>
      <img className="dashboard-child16" alt="" src="/ellipse-2@2x.png" />
      <a className="karen1">{`Karen `}</a>
      <img className="dashboard-child17" alt="" src="/star-11.svg" />
      <img className="dashboard-child18" alt="" src="/star-11.svg" />
      <img className="dashboard-child19" alt="" src="/star-11.svg" />
      <img className="dashboard-child20" alt="" src="/star-11.svg" />
      <img className="dashboard-child21" alt="" src="/star-15.svg" />
      <div className="dashboard-child22" />
      <div className="tech-coupons-can2">
        Tech coupons can be a great way to save money on your favorite tech
        products.
      </div>
      <img className="dashboard-child23" alt="" src="/ellipse-2@2x.png" />
      <a className="karen2">{`Karen `}</a>
      <img className="dashboard-child24" alt="" src="/star-11.svg" />
      <img className="dashboard-child25" alt="" src="/star-11.svg" />
      <img className="dashboard-child26" alt="" src="/star-11.svg" />
      <img className="dashboard-child27" alt="" src="/star-11.svg" />
      <img className="dashboard-child28" alt="" src="/star-15.svg" />
      <div className="analysis">Analysis</div>
      <div className="reviews">Reviews</div>
    </div>
  );
};

export default Dashboard;
