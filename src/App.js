import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarSection from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Search from "./Pages/Search/Search";
import Details from "./Pages/Details/Details";
import { MenuProvider } from "./Context/MenuContext";

const App = () => {
	return (
		<MenuProvider>
			<BrowserRouter>
				<div className='appContainer'>
					<NavbarSection />
					<Routes>
						<Route exact path='/' element={<Login />} />
						<Route exact path='/home' element={<Home />} />
						<Route exact path='/search' element={<Search />} />
						<Route exact path='/detail/:id' element={<Details />} />
					</Routes>
				</div>
			</BrowserRouter>
		</MenuProvider>
	);
};
export default App;
