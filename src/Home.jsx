import { Line } from "react-chartjs-2";

import { IterativeData } from "./Iterative";
import { RecursiveData } from "./Recursive";

export const Home = () => {
  const iterativeArr = [
    IterativeData(1),
    IterativeData(5),
    IterativeData(10),
    IterativeData(50),
    IterativeData(100),
    IterativeData(500),
    IterativeData(1000),
    IterativeData(5000),
    IterativeData(8000),
  ];

  const recursiveArr = [
    RecursiveData(1),
    RecursiveData(5),
    RecursiveData(10),
    RecursiveData(50),
    RecursiveData(100),
    RecursiveData(500),
    RecursiveData(1000),
    RecursiveData(5000),
    RecursiveData(8000),
  ];

  const fibonacci = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 150);
    gradientBlue.addColorStop(0, "rgba(85, 85, 255, 0.9)");
    gradientBlue.addColorStop(1, "rgba(151, 135, 255, 0.8)");
    const gradientRed = canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 150);
    gradientRed.addColorStop(0, "rgba(255, 85, 184, 0.9)");
    gradientRed.addColorStop(1, "rgba(255, 135, 135, 0.8)");

    return {
      labels: ["1", "5", "10", "50", "100", "500", "1000", "5000", "8000"],
      datasets: [
        {
          label: "Iterative",
          fill: true,
          borderColor: gradientBlue,
          pointBorderColor: "rgba(151, 135, 255, 0.8)",
          backgroundColor: gradientBlue,
          pointBackgroundColor: gradientBlue,
          pointHoverBackgroundColor: gradientBlue,
          pointHoverBorderColor: gradientBlue,
          pointRadius: 0,
          borderWidth: 4,
          data: iterativeArr,
        },

        {
          label: "Recursive",
          fill: true,
          borderColor: gradientRed,
          pointBorderColor: "rgba(255, 135, 135, 0.8)",
          backgroundColor: gradientRed,
          pointBackgroundColor: gradientRed,
          pointHoverBackgroundColor: gradientRed,
          pointHoverBorderColor: gradientRed,
          pointRadius: 0,
          borderWidth: 4,
          data: recursiveArr,
        },
      ],
    };
  };
  return (
    <div className="card">
      <div className="info">
        <h3>Iterative vs Recursive with Fibonacci Algorithm</h3>
        <p className="subtitle">(Nth Element, Time in Nanoseconds)</p>
        <div className="legend">
        <span className="recursive"></span><p>Recursive</p>
        <span className="iterative"></span><p>Iterative</p>
        </div>
        <Line
          data={fibonacci}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  gridLines: {
                    color: '#f4f4f4',  
                    zeroLineColor: '#f4f4f4',  
                    display: true,
                  }
                },
                
              ],
              yAxes: [
                {
                  display: true,
                  gridLines: {
                    display: false,
                  }
                },
              ],
            },
            animation: {
                easing: "easeInOutBack"
              }
          }}
        />
      </div>
    </div>
  );
};
