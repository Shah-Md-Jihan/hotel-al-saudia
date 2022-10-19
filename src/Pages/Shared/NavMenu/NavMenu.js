import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                        <Link to="/">
                            <span className="text-warning fw-bold fs-3">Al Saudia</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white">
                                <Link to="/about" className="text-white text-decoration-none">
                                    About Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-white">
                                <Link to="/offers" className="text-white text-decoration-none">
                                    Offers
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-white">
                                <Link to="/interior" className="text-white text-decoration-none">
                                    Our Interior
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-white">
                                <Link to="/contact" className="text-white text-decoration-none">
                                    Contact Us
                                </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;