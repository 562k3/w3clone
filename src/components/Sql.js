import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Sql = () => {
  const navigate = useNavigate();
  const navigatetosql = () => {
    navigate("/sqlpage"); 
  }
  const navigatecertificatepage = () => {
    navigate("/certificatepage");
  }
  return (
    <div className="html-page sql">
      <div className="html-one">
        <h1>SQL</h1>
        <p>A language for accessing database</p>
        <div className="html-btns">
          <button className="html-btns-one one" onClick={navigatetosql} >Learn SQL</button>
          <button className="html-btns-one four" onClick={navigatecertificatepage}>Get Certified</button>
        </div>
      </div>
      <div className="html-two">
        <div>SQL expample:</div>
        <div className="example"></div>
      </div>
    </div>
  );
};

export default Sql;
