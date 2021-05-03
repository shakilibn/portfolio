import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/about">About me</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Menubar;