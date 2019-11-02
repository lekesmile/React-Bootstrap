import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


export default class navbar extends Component {
    render() {
        return (
            <div>
               <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" style={{ textDecoration: 'none', padding: 20 }}>HOME</Link>
                            <Link to="/about" style={{ textDecoration: 'none', padding: 20 }}>ABOUT</Link>
                            <Link to="/clients" style={{ textDecoration: 'none', padding: 20 }}>CLIENTS</Link>
                        </Nav>

                        <Button variant="outline-success">Search</Button>

                    </Navbar.Collapse>
                </Navbar>
            </Container> 
            </div>
        )
    }
}
