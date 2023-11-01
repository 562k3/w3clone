import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";
import Python from "./Python";
import Sql from "./Sql";
import Mixone from "./Mixone";
import Footer from "./Footer";

function Mainpage() {
  return (
    <>
    <div className="mainpage">
      <div className="main-content">
        <h1>Learn To Code</h1>
        <h3>with the world's largest web developer site.</h3>
        <a href="" className="link">
          Not sure where to begin?
        </a>
      </div>
    </div>
    <Html />
    <Css />
    <Javascript />
    <Python />
    <Sql />
    <Mixone />
    <Footer />
    </>
  );
}

export default Mainpage;
