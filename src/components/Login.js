import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-div">
        <h1>Log In</h1>
        <div>
          <p>Email Id:</p>
          <input type="text"></input>
        </div>
        <div>
          <p>Password:</p>
          <input type="password"></input>
        </div>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Login;
