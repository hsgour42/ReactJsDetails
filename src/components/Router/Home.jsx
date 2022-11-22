import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      Home Page <br />
      <button
        onClick={() =>
          navigate("/contact", {
            state: { name: "Himanshu", phone: "9044211884" },
          })
        }
      >
        move to contact page
      </button>
      <button onClick={() => navigate("/about")}>move to about page</button>
    </div>
  );
}

export default Home;
