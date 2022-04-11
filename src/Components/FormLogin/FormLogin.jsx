import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import makePost from "../../Helpers/postForm";
// import axios from "axios";

const FormLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPw] = useState("");
	const [valid, setValid] = useState(undefined);

	const onSubmit = async (e) => {
		e.preventDefault();
		setValid(
			await makePost(
				email,
				password,
				"http://challenge-react.alkemy.org/"
			)
		);
	};

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

			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default FormLogin;
