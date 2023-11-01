import React from "react";
import "../App.css";
import { useNavigate, Navigate, NavLink, Link } from "react-router-dom";

const Mixone = () => {
  const navigate = useNavigate();
  const navigatephppage = () => {
    navigate('/phppage')
  }
  const navigatejquery = () => {
    navigate('/jquerypage')
  }
  const navigatecplus = () => {
    navigate('/cplus')
  }
  const navigatebootstrap = () => {
    navigate('/bootstrap')
  }
  const navigatec = () => {
    navigate('/c')
  }
  const navigatechash = () => {
    navigate('/chash')
  }
  const navigateexcel = () => {
    navigate('/excel')
  }
  const navigategooglesheets = () => {
    navigate('/googlesheets')
  }
  const navigater = () => {
    navigate('/r')
  }
  const navigatekotlin = () => {
    navigate('/kotlin')
  }
  const navigatenodejs = () => {
    navigate('/nodejs')
  }
  const navigatereactpage = () => {
    navigate('/reactpage')
  }
  
  return (
    <div className="mixone-divone">
      <div className="mixone-divtwo">
        <div className="one mixone-common" onClick={navigatephppage}>
          <h1>PHP</h1>
        
        </div>
        <div className="two mixone-common" onClick={navigatejquery}>
          <h1>jQuery</h1>
       
         
        </div>
      </div>
      <div className="mixone-divtwo">
        <div className="three mixone-common" onClick={navigatecplus}>
          <h1>C++</h1>
         
         
        </div>
        <div className="five mixone-common" onClick={navigatereactpage}>
          <h1>React</h1>
        </div>
      </div>
      <div className="mixone-divtwo">
        <div className="five mixone-common" onClick={navigatebootstrap}>
          <h1>Bootstrap</h1>
         
        
        </div>
        <div className="one mixone-common" onClick={navigatec}>
          <h1>C</h1>
          
        
        </div>
      </div>
      <div className="mixone-divtwo">
        <div className="two mixone-common" onClick={navigatechash}>
          <h1>C#</h1>
        </div>
        <div className="three mixone-common" onClick={navigateexcel}>
          <h1>Excel</h1>
        </div>
      </div>
      <div className="mixone-divtwo">
        <div className="four mixone-common" onClick={navigategooglesheets}>
          <h1>Google Sheets</h1>
        </div>
        <div className="two mixone-common" onClick={navigater}>
          <h1>R</h1>
        
        </div>
      </div>
      <div className="mixone-divtwo">
        <div className="three mixone-common" onClick={navigatekotlin}>
          <h1>Kotlin</h1>
        </div>
        <div className="four mixone-common" onClick={navigatenodejs}>
          <h1>Node.js</h1>
        
        </div>
      </div>
      <div className="mixone-divtwo">
        
      </div>
    </div>
  );
};

export default Mixone;
