
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Python = () => {
  const navigate = useNavigate();
  const navigatetopython = () => {
    navigate("/pythonpage");
  }
  const navigatecertificatepage = () => {
    navigate("/certificatepage");
  }
  return (
    <div className="html-page python">
      <div className="html-two">
        <div>Python expample:</div>
        <div className="example"></div>
      </div>
      <div className="html-one">
        <h1>PYTHON</h1>
        <p>A popular programming language</p>
        <div className="html-btns">
          <button className="html-btns-one four" onClick={navigatetopython}>Learn Python</button>
          <button className="html-btns-one three" onClick={navigatecertificatepage}>Get Certified</button>
        </div>
      </div>
      
    </div>
  );
};

export default Python;
