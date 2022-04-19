import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
	const [menu, setMenu] = useState([]);

	const getMenu = () => {
		return menu;
	};

	const addRecipe = (recipe) => {
		setMenu([...recipe]);
	};

	const averageTotalPriceMenu = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.price, 0) /
					menu.length +
					1
			: 0;
	};

	const averageTotalTimePreparation = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.time, 0) /
					(menu.length + 1)
			: null;
	};

	const averageTotalHealthScore = () => {
		return menu.length > 0
			? menu.reduce((total, recipe) => total + recipe.helthScore, 0) /
					(menu.length + 1)
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
				addRecipe,
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
