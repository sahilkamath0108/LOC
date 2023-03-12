import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const [chartData, setChartData] = useState(null);
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…5ODh9.wym5fTKbWbK-DYO5BNhWaNgNwWocFu6tiNRx30IMvds"; // Replace this with your actual access token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/company/productWise', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const data = await response.json();
        const chartData = {
          labels: data.map(item => item.product),
          datasets: [
            {
              label: 'Sales',
              data: data.map(item => item.sales),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        };
        setChartData(chartData);
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
      <a className="brands1">Brands</a>
      <a className="notifications1">Notifications</a>
      <img className="profile" alt="" src="https://source.unsplash.com/random/1000x1000/?girl" />
      {chartData && <Bar data={chartData} options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }} />}
    </div>
  );
};

export default CompanyDashboard;
