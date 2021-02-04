import React, {Component} from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default class Header extends Component {
	render() {
		return (
			<section id="header">
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
				 <Navbar.Brand href="">Gian Zairus Sarmiento</Navbar.Brand>
				 <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				 <Navbar.Collapse id="responsive-navbar-nav">
					 <Nav className="mr-auto">
					 </Nav>
					 <Nav className="">
					 	<Nav.Link href="">About</Nav.Link>
					 	<Nav.Link href="">Contact</Nav.Link>
					 </Nav>
				 </Navbar.Collapse>
				</Navbar>
			</section>
			)
	}
}