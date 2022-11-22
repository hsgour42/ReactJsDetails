import React from "react";
import { useNavigate } from "react-router-dom";

function Auth({ auth }) {
  const navigate = useNavigate();
  function login() {
    auth();
    navigate("dashboard");
  }
  return (
    <div>
      Auth
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Auth;
