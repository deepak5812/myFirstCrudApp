import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap';
import "../../src/index.css";
import { NavLink } from "react-router-dom";

const Navbars=()=>{
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Container className="navbarcontainer">
    <NavLink className="fhead" to="/">myCRUD</NavLink>
    <Nav className="me-auto">
     <NavLink className="homenav" to='/'><Nav> Home</Nav></NavLink>
      <NavLink className="writeblogsnav" to='/writeblogs'>writeblogs</NavLink>
      <NavLink className="aboutmenav" to='/about'>aboutme</NavLink>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
export default Navbars;
