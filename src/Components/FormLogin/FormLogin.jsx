import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const FormLogin = () => {
	const [pw, setPw] = useState("");
	const [emailInput, setEmail] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		let body = new FormData();

		body.append("email", emailInput);
		body.append("password", pw);

		axios({
			method: "post",
			url: "http://challenge-react.alkemy.org/",
			data: body,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(function (response) {
				//handle success
				console.log(response);
			})
			.catch(function (response) {
				//handle error
				console.log(response);
			});
	};

	return (
		<Form>
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

			<Button
				variant='primary'
				type='submit'
				onClick={(e) => onSubmit(e)}
			>
				Submit
			</Button>
		</Form>
	);
};

export default FormLogin;
