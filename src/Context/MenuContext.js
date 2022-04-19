import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
	const [menu, setMenu] = useState([]);

	const getMenu = () => {
		return menu;
	};

	const addRecipe = (recipe) => {
		menu.push(recipe);
		setMenu(menu);
	};

	const deleteRecipe = (recipe) => {
		menu.splice(menu.indexOf(recipe), 1);
		setMenu(menu);
	};

	const averageTotalPriceMenu = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.price, 0)
			: 0;
	};

	const averageTotalTimePreparation = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.time, 0) /
					menu.length
			: null;
	};

	const averageTotalHealthScore = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.helthScore, 0) /
					menu.length
			: null;
	};

	const canAddMenu = () => {
		return menu.length < 3;
	};

	const emptyMenu = () => {
		setMenu([]);
	};

	const canAddVegan = () => {
		let totalVegan = 0;
		menu.map((recipe) =>
			recipe.vegan ? (totalVegan = totalVegan + 1) : null
		);
		return totalVegan;
	};

	const canAddNoVegan = () => {
		let totalNoVegan = 0;
		menu.map((recipe) =>
			recipe.vegan ? null : (totalNoVegan = totalNoVegan + 1)
		);
		return totalNoVegan;
	};

	return (
		<MenuContext.Provider
			value={{
				getMenu,
				addRecipe,
				deleteRecipe,
				averageTotalPriceMenu,
				averageTotalTimePreparation,
				averageTotalHealthScore,
				canAddMenu,
				emptyMenu,
				canAddVegan,
				canAddNoVegan,
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
};
