import React from "react";
import Plot from "react-plotly.js";

import Card from "../../shared/components/UIElements/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Card className="home_card">
        <div>
          <h1>Home page</h1>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Home;
