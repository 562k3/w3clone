import React from "react";
import "../App.css";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-div">
        <h1>Sign Up</h1>
        <div>
          <p>Name:</p>
          <input type="text" ></input>
        </div>
        <div>
          <p>Email Id:</p>
          <input type="text" ></input>
        </div>
        <div>
          <p>Password:</p>
          <input type="password" ></input>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
