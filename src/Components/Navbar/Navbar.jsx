import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='navbarContainer'>
			<ul>
				<li>
					<Link to='/'>LOGIN</Link>
				</li>
				<li>
					<Link to='/home'>HOME</Link>
				</li>
				<li>
					<Link to='/search'>SEARCH</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
