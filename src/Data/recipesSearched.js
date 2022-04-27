let listOfRecipes = [];

export const updateListRecipesSearched = (arrayRecipe) => {
	listOfRecipes = arrayRecipe;
};

export const getListRecipesSearched = () => {
	return listOfRecipes;
};
