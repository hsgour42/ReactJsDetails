import React from "react";
import { useNavigate } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [10, 2, 3],
    },
  ],
};

function Dashboard({ logoutx }) {
  const navigate = useNavigate();

  function logout() {
    logoutx();

    navigate("auth");
  }
  return (
    <div>
      Dashboard <br />
      <button onClick={logout}>Logout</button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Dashboard;
