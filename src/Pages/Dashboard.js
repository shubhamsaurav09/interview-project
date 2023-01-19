import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

function Dashboard() {
  const [auth, setAuth] = useState(false);
  const userName = sessionStorage.getItem("username");

  useEffect(() => {
    const isLogin = sessionStorage.getItem("auth");
    if (isLogin === "true") {
      setAuth(true);
      console.log(auth);
    }
  }, [auth]);

  if (!auth) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return (
      <div className="dashboard">
        <p>Hello {userName}</p>
        <Link id="logout" to={"/"}>
          Logout
        </Link>
      </div>
    );
  }
}

export default Dashboard;
