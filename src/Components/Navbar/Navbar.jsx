import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import alkemyImg from "../../Assets/alkemy.svg";
import { IsLoggedContext } from "../../Context/IsLoggedContext";
import { ToastLogOut } from "../../Helpers/toast";
import "./Navbar.css";

const NavbarSection = () => {
	const { getIsLogged, logOut } = useContext(IsLoggedContext);

	const handleLogout = () => {
		ToastLogOut.fire({
			icon: "info",
			title: "Logging out",
		});
		setTimeout(() => {
			logOut();
		}, 1500);
	};

	return (
		<Navbar bg='primary' expand='sm' fixed='top' className='navBarCustom'>
			<Container>
				<Navbar.Brand href='#home'>
					<Image src={alkemyImg} alt='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						{getIsLogged() && (
							<Link className='linkNavbar' to='/home'>
								HOME
							</Link>
						)}
						{getIsLogged() && (
							<Link className='linkNavbar' to='/search'>
								SEARCH
							</Link>
						)}
					</Nav>
					{getIsLogged() && (
						<Button
							className='d-flex'
							onClick={() => handleLogout()}
							variant='contained'
							endIcon={<LogoutIcon />}
						>
							Log Out
						</Button>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarSection;
