import React from "react";
import "../App.css";
import { useNavigate, Navigate, Link, NavLink } from "react-router-dom";

const Css = () => {
  const navigate = useNavigate();
  const navigatecsspage = () => {
    navigate('/csspage ')
  }
  const navigatecertificatepage = () => {
    navigate("/certificatepage");
  }
  return (
    <div className="html-page css">
      <div className="html-two">
        <div>CSS expample:</div>
        <div className="example"></div>
      </div>
      <div className="html-one">
        <h1>CSS</h1>
        <p>The language for styling web pages</p>
        <div className="html-btns">
          <button className="html-btns-one four" onClick={navigatecsspage}>Learn Css</button>
          <button className="html-btns-one three" onClick={navigatecertificatepage}>Get Certified</button>
        </div>
      </div>
      
    </div>
  );
};

export default Css;
