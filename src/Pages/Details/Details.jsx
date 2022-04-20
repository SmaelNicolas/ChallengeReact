import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { getListRecipesSearched } from "../../Data/recipesSearched";

const Details = () => {
	const { idRecipe } = useParams();

	const [recipe, setRecipe] = useState();

	useEffect(() => {
		let getRec = getListRecipesSearched().find(
			(recipe) => recipe.id === idRecipe
		);
		setRecipe(getRec);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idRecipe]);

	return <Title>Details</Title>;
};

export default Details;
