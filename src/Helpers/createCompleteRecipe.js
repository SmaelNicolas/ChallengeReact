import axios from "axios";

const createCompleteRecipe = async (recipes, fn, show) => {
	if (recipes !== undefined) {
		let arrayRecipes = [];
		recipes.map(async (rec) => {
			await axios
				.get(
					`https://api.spoonacular.com/recipes/${rec.id}/information?apiKey=0aa9b30d89cc43f3968c6c1321dee967`
				)
				.then((response) => {
					console.log(rec.id);
					let data = response.data;
					let completeRecipe = {
						id: data.id,
						title: data.title,
						img: data.image,
						description: data.summary,
						vegan: data.vegan,
						helthScore: data.healthScore,
						price: data.pricePerServing / 100,
						time: data.readyInMinutes,
					};
					arrayRecipes.push(completeRecipe);
				})
				.finally(() => {
					console.log(arrayRecipes);
					fn(arrayRecipes);
					show();
				});
		});
	}
};

export default createCompleteRecipe;
