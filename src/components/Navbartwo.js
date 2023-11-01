import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { useNavigate , navigate, Link, NavLink} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Navbartwo() {
  const navigate = useNavigate();
  const navigatehtmlpage = () => {
    navigate("/htmlpage")
  }
  const navigatejspage = () => {
    navigate('/jspage')
  }
  const navigatecsspage = () => {
    navigate('/csspage')
  }
  const navigatephppage = () => {
    navigate('/phppage')
  }
  const navigatebootstrap = () => {
    navigate("/bootstrap")
  }
  const navigatec = () => {
    navigate("/c")
  }
  const navigatechash = () => {
    navigate("/chash")
  }
  const navigatecplus = () => {
    navigate("/cplus")
  }
  const navigateexcel = () => {
    navigate("/excel")
  }
  const navigategooglesheets = () => {
    navigate("/googlesheets")
  }
  const navigatejquerypage = () => {
    navigate("/jquerypage")
  }
  const navigatejson = () => {
    navigate("/json")
  }
  const navigatekotlin = () => {
    navigate("/kotlin")
  }
  const navigatewthree = () => {
    navigate("/wthree")
  }
  const navigatesqlpage = () => {
    navigate("/sqlpage")
  }
  const navigatereactpage = () => {
    navigate("/reactpage")
  }
  const navigater = () => {
    navigate("/r")
  }
  const navigaterpythonpage = () => {
    navigate("/pythonpage")
  }
  const navigatenodejs= () => {
    navigate("/nodejs")
  }
  const navigatesignup = () => {
    navigate("/signup")
  }
  const navigatelogin = () => {
    navigate("/login")
  }

  return (
    <> 
    <Navbar expand="lg" className="bg-body-tertiary navbartwo " id='two'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbartwo-links">
            <Nav.Link href="#link" onClick={navigatehtmlpage}>HTML</Nav.Link>
            <Nav.Link href="#link" onClick={navigatecsspage}>CSS</Nav.Link>
            <Nav.Link href="#link" onClick={navigatejspage}>JAVASCRIPT</Nav.Link>
            <Nav.Link href="#link" onClick={navigaterpythonpage}>PYTHON</Nav.Link>
            <Nav.Link href="#link" onClick={navigatesqlpage}>SQL</Nav.Link>
            <Nav.Link href="#link" onClick={navigatephppage}>PHP</Nav.Link>
            <Nav.Link href="#link" onClick={navigatejquerypage}>JQUERY</Nav.Link>
            <Nav.Link href="#link" onClick={navigatecplus}>C++</Nav.Link>
            
            <Nav.Link href="#link" onClick={navigatebootstrap}>BOOTSTRAP</Nav.Link>
            <Nav.Link href="#link" onClick={navigatec}>C</Nav.Link>
            <Nav.Link href="#link" onClick={navigatechash}>C#</Nav.Link> 
            <Nav.Link href="#link" onClick={navigateexcel}>EXCEL</Nav.Link>
            <Nav.Link href="#link" onClick={navigategooglesheets}>GOOGGLE SHEETS</Nav.Link>
            <Nav.Link href="#link" onClick={navigater}>R</Nav.Link>
            <Nav.Link href="#link" onClick={navigatekotlin}>KOTLIN</Nav.Link>
            <Nav.Link href="#link" onClick={navigatenodejs}>NODEJS</Nav.Link>
            <Nav.Link href="#link" onClick={navigatereactpage}>REACT</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
}

export default Navbartwo;
