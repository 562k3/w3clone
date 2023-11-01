import React from "react";
import "../App.css";
import { Navigate, useNavigate, NavLink, Link } from "react-router-dom";

const Javascript = () => {
  const navigate = useNavigate();
  const navigatejspage = () => {
    navigate("/jspage")
  }
  const navigatecertificatepage = () => {
    navigate("/certificatepage");
  }
  return (
    <div className="html-page js">
      <div className="html-one">
        <h1>JAVASCRIPT</h1>
        <p>The language for programming web pages</p>
        <div className="html-btns">
          <button className="html-btns-one one" onClick={navigatejspage}>Learn Javascript</button>
          <button className="html-btns-one three" onClick={navigatecertificatepage}>Get Certified</button>
        </div>
      </div>
      <div className="js-two">
        <div>Javascript expample:</div>
        <div className="js-example"></div>
      </div>
    </div>
  );
};

export default Javascript;
