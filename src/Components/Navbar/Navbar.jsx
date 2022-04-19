import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import alkemyImg from "../../Assets/alkemy.svg";
import "./Navbar.css";

const NavbarSection = () => {
	return (
		<div className='navbarContainer'>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Image src={alkemyImg} alt='' srcset='' />
					<Nav className='me-auto'>
						<Link className='linkNavbar' to='/'>
							LOGIN
						</Link>
						<Link className='linkNavbar' to='/home'>
							HOME
						</Link>
						<Link className='linkNavbar' to='/search'>
							SEARCH
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarSection;
