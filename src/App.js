// import { useState } from "react";

// import BarChart from "./components/charts/BarChart";
// import { UserData } from "./Data";
// import LineChart from "./components/charts/LineChart";
// import PieChart from "./components/charts/PieChart";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  // const [userData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <div className="App">
      <Header/>
      <>
        <Home/>
      </>
       {/* <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;
