import axios from "axios";

const makePost = async (email, password, url, fn) => {
	let body = new FormData();

	body.append("email", email);
	body.append("password", password);

	await axios({
		method: "post",
		url: url,
		data: body,
		headers: { "Content-Type": "multipart/form-data" },
	})
		.then((response) => {
			fn(response.data.token);
		})
		.catch((error) => {
			fn(undefined);
		});
};

export default makePost;
