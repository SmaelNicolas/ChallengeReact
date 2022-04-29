import axios from "axios";

const doSearchQuery = async (value, fn) => {
	let result;
	await axios({
		method: "GET",
		url: `https://api.spoonacular.com/recipes/autocomplete?number=15&query=${value}&apiKey=0aa9b30d89cc43f3968c6c1321dee967 `,
	})
		.then((response) => {
			fn(response.data);
		})
		.catch((error) => fn(null));
	return result;
};

export default doSearchQuery;
