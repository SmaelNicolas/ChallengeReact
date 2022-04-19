import axios from "axios";

const createCompleteRecipe = (recipes, fn, show) => {
	if (recipes !== undefined) {
		let arrayRecipes = [];
		recipes.map(async (rec) => {
			await axios
				.get(
					`https://api.spoonacular.com/recipes/${rec.id}/information?apiKey=0aa9b30d89cc43f3968c6c1321dee967`
				)
				.then((response) => {
					let data = response.data;
					let completeRecipe = {
						id: recipes.id,
						title: data.title,
						img: data.image,
						description: data.summary,
						vegan: data.vegan,
						helthScore: data.healthScore,
						price: data.pricePerServing / data.servings,
						time: data.readyInMinutes,
					};
					arrayRecipes.push(completeRecipe);
				})
				.catch((error) => console.log(error))
				.finally(() => {
					fn(arrayRecipes);
					show();
				});
		});
	}
};

export default createCompleteRecipe;
