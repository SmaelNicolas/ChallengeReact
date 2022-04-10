import React from "react";
import FormLogin from "../../Components/FormLogin/FormLogin";
import Title from "../../Components/Title/Title";

import "./Login.css";

const Login = () => {
	return (
		<div className='loginContainer'>
			<Title title={"Login"} />
			<FormLogin />
		</div>
	);
};

export default Login;
