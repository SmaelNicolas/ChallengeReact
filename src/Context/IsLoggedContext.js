import React, { createContext, useState } from "react";

export const IsLoggedContext = createContext();

const IsLoggedContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [token, setToken] = useState("false");

	const createLS = (token) => {
		setIsLogged(token !== undefined);
		setToken(token);
		localStorage.setItem(
			"logginValue",
			JSON.stringify(token !== undefined)
		);
		localStorage.setItem("token", JSON.stringify(token));
	};

	const getIsLogged = () => {
		return JSON.parse(localStorage.getItem("logginValue"));
	};

	const getToken = () => {
		return JSON.parse(localStorage.getItem("token"));
	};

	const logOut = () => {
		setIsLogged(false);
		setToken(undefined);
		localStorage.removeItem("logginValue");
		localStorage.removeItem("token");
	};

	return (
		<IsLoggedContext.Provider
			value={{
				getIsLogged,
				getToken,
				createLS,
				logOut,
			}}
		>
			{children}
		</IsLoggedContext.Provider>
	);
};

export default IsLoggedContextProvider;
