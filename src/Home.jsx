import { Line } from "react-chartjs-2";
import { CopyBlock, github, hybrid } from "react-code-blocks";

import { iterativeArr, iterative } from "./Iterative";
import { recursiveArr, recursive } from "./Recursive";

export const Home = () => {
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
          pointRadius: 4,
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
          pointRadius: 4,
          borderWidth: 4,
          data: recursiveArr,
        },
      ],
    };
  };

  const iterativeToString = String(iterative);
  const recursiveToString = String(recursive);

  const hideLabels = (window.innerWidth) < 1000 ? false : true;
  const toggleCodeTheme = (window.innerWidth) < 1000 ? hybrid : github;
  return (
    <div>
      <h1>The Fibonacci algorithm</h1>
      <p>
        The Fibonacci numbers are the numbers in the following integer sequence:
        <pre className="numbers">
          0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, a<sub>n</sub>
        </pre>
        In mathematical terms, the sequence F<sub>n</sub> of Fibonacci numbers
        is defined by the recurrence relation:
      </p>
      <pre className="numbers">
        F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>
      </pre>
      <p>
        Recursion and Iteration both repeatedly execute a set of instructions.
        Recursion happens when a statement in a{" "}
        <span className="numbers-inline">function</span> calls itself
        repeatedly. The iteration is when a{" "}
        <span className="numbers-inline">loop</span> repeatedly executes until
        the controlling condition becomes false.
      </p>
      <p>
        Following are different methods to get the <sub>n</sub>th Fibonacci
        number:
      </p>
      <h3>Recursive method</h3>
      <CopyBlock
        text={recursiveToString}
        language="javascript"
        codeBlock
        theme={toggleCodeTheme}
        showLineNumbers={false}
      />

      <p>
        We can observe that this implementation has a lot of repeated work. We
        may consider this a bad implementation for nth Fibonacci number.
      </p>
      <pre className="numbers">
        T<sub>n</sub> = T<sub>n-1</sub> + T<sub>n-2</sub>, which is exponential. The time complexity in this case is O(2<sup>n</sup>)
      </pre>
      <p>
        It is possible to avoid the recursion by storing the Fibonacci numbers
        calculated so far with a simple{" "}
        <span className="numbers-inline">for loop</span>.
      </p>

      <h3>Iterative method</h3>
      <CopyBlock
        language="javascript"
        text={iterativeToString}
        codeBlock
        theme={toggleCodeTheme}
        showLineNumbers={false}
      />
      <pre className="numbers">
        Time complexity: O <sub>(n)</sub>
      </pre>
      <p>
        Down below it is possible to see a visual comparasion in terms of speed
        complexity between both methods. Every time the page rerenders, a new
        test is performed dinamically:
      </p>
      <div className="card">
        <div className="info">
          <h3 className="cardH3">Iterative vs Recursive with Fibonacci Algorithm</h3>
          <p className="subtitle">(Nth Element, Time in Nanoseconds)</p>
          <div className="legend">
            <span className="recursive"></span>
            <p>Recursive</p>
            <span className="iterative"></span>
            <p>Iterative</p>
          </div>
          <Line
            data={fibonacci}
            options={{
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    display: hideLabels,
                    gridLines: {
                      color: "#f4f4f4",
                      zeroLineColor: "#f4f4f4",
                      display: true,
                    }
                  },
                ],
                yAxes: [
                  {
                    display: hideLabels,
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              animation: {
                easing: "easeInOutBack",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
