import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import "./Search.css";
import doSearchQuery from "../../Helpers/getSearchQuery";
import RecipesSearched from "./RecipesSearched/RecipesSearched";
import createCompleteRecipe from "../../Helpers/createCompleteRecipe";

import info from "../../Data/DataCopiada";

const Search = () => {
	const [recipes, setRecipes] = useState(undefined);
	const [completeRecipes, setCompleteRecipes] = useState(info);

	const SignupSchema = Yup.object().shape({
		querySearch: Yup.string()
			.min(3, "Too Short!")
			.max(25, "Too Long!")
			.required("Required"),
	});

	const addRecipes = (value) => {
		setRecipes(value);
	};
	const addCompleteRecipe = (value) => {
		setCompleteRecipes(value);
	};

	useEffect(() => {
		// createCompleteRecipe(recipes, addCompleteRecipe);
	}, [recipes]);

	return (
		<>
			<Formik
				initialValues={{
					querySearch: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// doSearchQuery(values.querySearch, addRecipes);
					console.log("HOLA");
				}}
			>
				{({ errors, touched }) => (
					<Form className='formSearchContainer'>
						<label htmlFor='querySearch'>
							What are you looking for
						</label>
						<Field name='querySearch' />
						{errors.querySearch && touched.querySearch ? (
							<div>{errors.querySearch}</div>
						) : null}
						<Button variant='success' type='submit'>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
			{completeRecipes !== undefined && (
				<RecipesSearched recipes={completeRecipes} />
			)}
		</>
	);
};

export default Search;
