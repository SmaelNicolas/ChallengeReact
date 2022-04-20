import React, { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import LoadingButton from "@mui/lab/LoadingButton";
import makePost from "../../Helpers/postForm";
import { IsLoggedContext } from "../../Context/IsLoggedContext";
import Swal from "sweetalert2";

const FormLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPw] = useState("");
	const [token, setToken] = useState();
	const [disabled, setDisabled] = useState(false);

	const { createLS } = useContext(IsLoggedContext);

	const onSubmit = async (e) => {
		setDisabled(true);
		e.preventDefault();
		await makePost(
			email,
			password,
			"http://challenge-react.alkemy.org/",
			saveToken
		);
	};

	const saveToken = (tk) => {
		if (tk !== undefined) {
			let timerInterval;
			Swal.fire({
				title: "Welcome !",
				html: "Redirecting to home in <strong></strong> seconds.<br/><br/>",
				timer: 3000,
				didOpen: () => {
					Swal.showLoading();
					timerInterval = setInterval(() => {
						Swal.getHtmlContainer().querySelector(
							"strong"
						).textContent = (Swal.getTimerLeft() / 1000).toFixed(0);
					}, 100);
				},
				willClose: () => {
					clearInterval(timerInterval);
				},
			});
			setTimeout(() => {
				setToken(tk);
				createLS(tk);
			}, 3000);
		} else {
			setToken(undefined);
			createLS(undefined);
			setTimeout(() => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "User / Password incorrect",
					footer: setDisabled(false),
				});
			}, 1500);
		}
	};

	useEffect(() => {}, [token]);

	return (
		<Form onSubmit={(e) => onSubmit(e)}>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email'
					required
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Password'
					required
					onChange={(e) => {
						setPw(e.target.value);
					}}
				/>
			</Form.Group>

			<LoadingButton loading={disabled} variant='outlined' type='submit'>
				Log In
			</LoadingButton>
		</Form>
	);
};

export default FormLogin;
