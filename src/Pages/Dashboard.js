import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const userName = localStorage.getItem("username");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("auth");
    if (loggedInUser) {
      localStorage.clear();
    }
  }, []);

  if (!auth) {
    return <Navigate replace to={"/"} />;
  } else {
    return (
      <div className="dashboard">
        <p>Hello {userName}</p>
        <button id="logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    );
  }
}

export default Dashboard;
