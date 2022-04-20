import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
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
		<div className='navbarContainer'>
			<Navbar bg='primary' variant='dark' expand='lg'>
				<Container className='containerLinks' fluid>
					<Image src={alkemyImg} alt='logo' />
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
					<Nav>
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
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarSection;
