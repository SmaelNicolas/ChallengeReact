import axios from "axios";

const makePost = async (email, password, url) => {
	let body = new FormData();
	let result = false;

	body.append("email", email);
	body.append("password", password);

	await axios({
		method: "post",
		url: url,
		data: body,
		headers: { "Content-Type": "multipart/form-data" },
	})
		.then((response) => {
			response.request.statusText === "OK"
				? (result = true)
				: (result = false);
		})
		.catch(function () {});

	return result;
};

export default makePost;
