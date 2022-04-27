import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { getListRecipesSearched } from "../../Data/recipesSearched";
import Loading from "../../Components/Loading/Loading";
import "./Details.css";

const Details = () => {
	const { idRecipe } = useParams();

	const [recipe, setRecipe] = useState();
	const [loadingBoolean, setLoadingBoolean] = useState(true);

	useEffect(() => {
		let listRecipes = getListRecipesSearched();
		let getRec = listRecipes.find(
			(recipe) => recipe.id === parseInt(idRecipe)
		);
		setRecipe(getRec);
		setTimeout(() => {
			setLoadingBoolean(false);
		}, 1500);
	}, [idRecipe, recipe]);

	return (
		<>
			<Title title='details' />
			{loadingBoolean ? (
				<Loading />
			) : (
				<div className='detailsContainer'>
					<h2>{recipe.title}</h2>
					<img
						className='detailImg'
						src={recipe.img}
						alt='img food'
					/>
					<ul className='infoContainer'>
						<li>Price per serving : ${recipe.price.toFixed(2)}</li>
						<li> Time preparation : {recipe.time}</li>
						<li>Helth Score : {recipe.helthScore}</li>
						<li>
							Food Type : {recipe.vegan ? "Vegan" : "No Vegan"}
						</li>
					</ul>
					<Paper elevation={24}>
						<p
							className='detailDescription'
							dangerouslySetInnerHTML={{
								__html: recipe.description,
							}}
						></p>
					</Paper>
				</div>
			)}
		</>
	);
};

export default Details;
