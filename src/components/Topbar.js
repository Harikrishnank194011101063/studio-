import React from 'react'
import {Container, Navbar} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'
import '../App.css'


function Topbar() {
  return (
    <>
      {/* <ul>
<li>    in this we will be having home</li>
<li> apply for timing</li>

<li>occupied timing </li>
<li>hidden address page and contact info</li>



      </ul> */}


 
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> SHAKTHI STUDIO </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/frontpage">Home</Nav.Link>
      <Nav.Link href="/occupied">Occupied timing</Nav.Link>
      <Nav.Link href="/apply">Apply</Nav.Link>




    </Nav>
    </Container>
  </Navbar>

  <br />
 
  
  

  
    </>

  )
}

export default Topbar
