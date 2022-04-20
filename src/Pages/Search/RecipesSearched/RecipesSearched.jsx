import React, { useContext, useEffect, useState } from "react";
import CardDish from "../../../Components/CardDish/CardDish";
import { MenuContext } from "../../../Context/MenuContext";
import { Toast, ToastWarning } from "../../../Helpers/toast";
import "./RecipesSearched.css";

const RecipesSearched = ({ recipes }) => {
	const { addRecipe, canAddVegan, canAddNoVegan } = useContext(MenuContext);
	const [addVegan, setAddVegan] = useState(true);
	const [addNoVegan, setAddNoVegan] = useState(true);

	const checkCanAddVegan = (recipe) => {
		let canAdd = canAddVegan();
		if (canAdd < 2) {
			addRecipe(recipe);
			Toast.fire({
				icon: "success",
				title: "Recipe added to Menu!",
			});
			if (canAddVegan() === 2) {
				setAddVegan(false);
				setTimeout(() => {
					ToastWarning.fire({
						icon: "warning",
						title: ` Vegan recipes limit reached!`,
					});
				}, 1500);
			}
		}
	};

	const checkCanAddNoVegan = (recipe) => {
		let canAdd = canAddNoVegan();
		if (canAdd < 2) {
			addRecipe(recipe);
			Toast.fire({
				icon: "success",
				title: "Recipe added to Menu!",
			});
			if (canAddNoVegan() === 2) {
				setAddNoVegan(false);
				setTimeout(() => {
					ToastWarning.fire({
						icon: "warning",
						title: ` No Vegan recipes limit reached!`,
					});
				}, 1500);
			}
		}
	};

	useEffect(() => {}, [recipes, addNoVegan, addVegan]);

	return (
		<div className='recipesSearchedContainer' key='recipeContainer'>
			{recipes.map((recipe) => (
				<CardDish
					recipe={recipe}
					id={recipe.id}
					key={`key${recipe.title}`}
					title={recipe.title}
					img={recipe.img}
					desc={recipe.description}
					add={true}
					addVegan={addVegan}
					addNoVegan={addNoVegan}
					checkCanAddVegan={checkCanAddVegan}
					checkCanAddNoVegan={checkCanAddNoVegan}
				/>
			))}
		</div>
	);
};

export default RecipesSearched;
