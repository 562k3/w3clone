import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import { useNavigate , navigate, Link, NavLink} from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import Mainpage from "./Mainpage";

function Navbarone() {
  const navigate = useNavigate();

  const navigatesignup = () => {
    navigate("/signup")
  }
  const navigatelogin = () => {
    navigate("/login")
  }
  const navigatemainpage = () => {
    navigate("/mainpage")
  }
  
  
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary nav-bar" id="one">
      <Container className="navbar navbaroneleft">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <h1 onClick={navigatemainpage} className="icon"><AiFillHome/></h1>
          <Nav className="me-auto tutorial-content">
           <h2>Welcome to w3 schools</h2>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success btn-signin" onClick={navigatesignup}>Signup</Button>
            <Button variant="outline-success btn-signin" onClick={navigatelogin}>Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarone;
