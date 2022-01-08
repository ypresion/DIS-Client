import React from "react";
import { Link } from 'react-router-dom';
import { Navbar,  Container, Nav} from 'react-bootstrap';

   
class NavBar extends React.Component {

    render() {
           return (
                <Navbar bg="light" expand="lg" as="ul">
                <Container>
                  <Navbar.Brand>DIS Papers</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as="li"><Link to="/">Home</Link></Nav.Link>
                      <Nav.Link as="li"><Link to="papers">Papers</Link></Nav.Link>
                      <Nav.Link as="li"><Link to="authors">Authors</Link></Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Log In 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
           )
       }
   }
   
export default NavBar;