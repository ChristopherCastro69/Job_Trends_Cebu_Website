import React from 'react'
import './home.css'
import BarChart from '../charts/BarChart'
import { UserData } from "./Data";
import { useState } from "react";

const Home = () => {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <section className="home section" id="home">
    <div className="home_container container grid">
        <div className="home_content grid">
            
            Hello World
        <div style={{ width: 1000 }}>
          <BarChart chartData={userData} />
        </div>
        </div>
    </div>
</section>
  )
}

export default Home