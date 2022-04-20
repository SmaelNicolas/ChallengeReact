import React from "react";
import { Link } from "react-router-dom";

const RedirectLogin = () => {
	return (
		<div>
			<p>Please Log In</p>
			<Link className='linkNavbar' to='/'>
				LOGIN
			</Link>
		</div>
	);
};

export default RedirectLogin;
