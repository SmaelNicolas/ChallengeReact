import React from "react";
import CardDish from "../../../Components/CardDish/CardDish";
import "./RecipesSearched.css";

const RecipesSearched = ({ recipes }) => {
	console.log(recipes);
	return (
		<>
			<h1>Recipes Searched</h1>
			<div className='recipesSearchedContainer'>
				{recipes.map((recipe) => (
					<CardDish
						key={recipe.id}
						title={recipe.title}
						img={recipe.img}
						desc={recipe.description}
						add={true}
					/>
				))}
			</div>
		</>
	);
};

export default RecipesSearched;
