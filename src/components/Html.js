import React from "react";
import "../App.css";
import { useNavigate, Navigate, Link, NavLink } from "react-router-dom";

const Html = () => {
  const navigate = useNavigate();
  const navigatehtmlpage = () => {
    navigate("/htmlpage")
  }
  const navigatecertificatepage = () => {
    navigate("/certificatepage");
  }

  return (
    <div className="html-page html">
      <div className="html-one">
        <h1>HTML</h1>
        <p>The language for building web pages</p>
        <div className="html-btns">
          <button className="html-btns-one one" onClick={navigatehtmlpage}>Learn HTML</button>
          <button className="html-btns-one four" onClick={navigatecertificatepage}>Get Certified</button>
        </div>
      </div>
      <div className="html-two" >
        <div>HTML expample:</div>
        <div className="example"></div>
      </div>
    </div>
  );
};

export default Html;
