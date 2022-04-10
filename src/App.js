import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";

const App = () => {
	return (
		<div className='appContainer'>
			<Navbar />
			<Login />
		</div>
	);
};
export default App;
