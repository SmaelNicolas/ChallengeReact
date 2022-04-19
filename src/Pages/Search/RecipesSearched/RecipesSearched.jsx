import React, { useContext, useEffect, useState } from "react";
import CardDish from "../../../Components/CardDish/CardDish";
import { MenuContext } from "../../../Context/MenuContext";
import "./RecipesSearched.css";

const RecipesSearched = ({ recipes }) => {
	console.log(recipes);

	const { addRecipe, canAddVegan, canAddNoVegan } = useContext(MenuContext);
	const [addVegan, setAddVegan] = useState(true);
	const [addNoVegan, setAddNoVegan] = useState(true);

	const checkCanAddVegan = (recipe) => {
		canAddVegan() < 2 && addRecipe(recipe);
		canAddVegan() === 2 && setAddVegan(false);
	};

	const checkCanAddNoVegan = (recipe) => {
		canAddNoVegan() < 2 && addRecipe(recipe);
		canAddNoVegan() === 2 && setAddNoVegan(false);
	};

	useEffect(() => {}, [recipes, addNoVegan, addVegan]);

	return (
		<>
			<h1>Recipes Searched</h1>
			<div className='recipesSearchedContainer' key='recipeContainer'>
				{recipes.map((recipe) => (
					<CardDish
						recipe={recipe}
						key={recipe.id}
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
		</>
	);
};

export default RecipesSearched;
