import React from "react";
import CardDish from "../../../Components/CardDish/CardDish";
import "./RecipesSearched.css";

const RecipesSearched = ({ recipes }) => {
	return (
		<>
			<h1>Recipes Searched</h1>
			<div className='recipesSearchedContainer'>
				{recipes.map((recipe) => {
					return (
						<CardDish
							key={recipe.id}
							title={recipe.title}
							img={recipe.img}
							description={recipe.description}
						/>
					);
				})}
			</div>
		</>
	);
};

export default RecipesSearched;
