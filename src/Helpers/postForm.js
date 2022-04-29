import axios from "axios";

const makePost = async (email, password, url, fn) => {
	await axios
		.post(url, {
			email: email,
			password: password,
		})
		.then((response) => {
			fn(response.data.token);
		})
		.catch(() => {
			fn(undefined);
		});
};

export default makePost;
