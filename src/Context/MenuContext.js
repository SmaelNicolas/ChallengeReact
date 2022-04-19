import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
	const [menu, setMenu] = useState([]);

	const getMenu = () => {
		return menu;
	};

	const addMenu = (menu) => {
		setMenu([...menu]);
	};

	const totalPriceMenu = () => {
		return menu.reduce((total, recipe) => total + recipe.price, 0);
	};

	const quantityRecipes = () => {
		return menu.length + 1;
	};

	const emptyMenu = () => {
		setMenu([]);
	};

	const canAddVegan = () => {
		let totalVegan = 0;
		menu.map((recipe) => (recipe.vegan ? totalVegan++ : null));
		return totalVegan < 2;
	};

	const canAddNoVegan = () => {
		let totalNoVegan = 0;
		menu.map((recipe) => (recipe.vegan ? null : totalNoVegan++));
		return totalNoVegan < 2;
	};

	return (
		<MenuContext.Provider
			value={{
				getMenu,
				addMenu,
				totalPriceMenu,
				quantityRecipes,
				emptyMenu,
				canAddVegan,
				canAddNoVegan,
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
};
