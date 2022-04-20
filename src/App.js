import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavbarSection from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
import Details from "./Pages/Details/Details";
import { IsLoggedContext } from "./Context/IsLoggedContext";

const App = () => {
	const { getIsLogged } = useContext(IsLoggedContext);

	return (
		<BrowserRouter>
			<div className='appContainer'>
				<NavbarSection />
				<Routes>
					<Route
						path='/'
						element={
							getIsLogged() ? <Navigate to='/home' /> : <Login />
						}
					/>
					<Route path='*' element={<Navigate to='/' />} />
					{getIsLogged() && (
						<Route exact path='/home' element={<Home />} />
					)}
					{getIsLogged() && (
						<Route exact path='/search' element={<Search />} />
					)}
					{getIsLogged() && (
						<Route
							exact
							path='/detail/:idRecipe'
							element={<Details />}
						/>
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
};
export default App;
