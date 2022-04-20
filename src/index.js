import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import IsLoggedContextProvider from "./Context/IsLoggedContext";
import { MenuProvider } from "./Context/MenuContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<IsLoggedContextProvider>
		<MenuProvider>
			<App />
		</MenuProvider>
	</IsLoggedContextProvider>
);
