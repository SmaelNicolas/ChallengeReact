import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import "./Search.css";
import doSearchQuery from "../../Helpers/getSearchQuery";
import RecipesSearched from "./RecipesSearched/RecipesSearched";
import createCompleteRecipe from "../../Helpers/createCompleteRecipe";
import Loading from "../../Components/Loading/Loading";

// import info from "../../Data/DataCopiada";
import {
	getListRecipesSearched,
	updateListRecipesSearched,
} from "../../Data/recipesSearched";
import Title from "../../Components/Title/Title";

const Search = () => {
	const [recipes, setRecipes] = useState(undefined);
	const [list, setList] = useState(false);
	const [loadingBoolean, setLoadingBoolean] = useState(true);

	// const [completeRecipes, setCompleteRecipes] = useState([]);
	const [completeRecipes, setCompleteRecipes] = useState(
		getListRecipesSearched()
	);

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
		updateListRecipesSearched(value);
		setCompleteRecipes(value);
	};

	const showList = () => {
		setList(true);
	};

	useEffect(() => {
		if (recipes !== undefined) {
			createCompleteRecipe(recipes, addCompleteRecipe, showList);
			updateListRecipesSearched(recipes);
			setLoadingBoolean(true);
		}

		setTimeout(() => {
			setLoadingBoolean(false);
		}, 2000);
	}, [recipes, list]);

	return (
		<>
			<Title title={"search"}></Title>
			<Formik
				initialValues={{
					querySearch: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					doSearchQuery(values.querySearch, addRecipes);
				}}
			>
				{({ errors, touched }) => (
					<Form className='formSearchContainer'>
						<label htmlFor='querySearch'>
							What are you looking for
						</label>
						<Field
							name='querySearch'
							placeholder='ex chicken'
							className='querySearch'
						/>
						{errors.querySearch && touched.querySearch ? (
							<div className='errorSearch'>
								{errors.querySearch}
							</div>
						) : null}
						<Button
							className='buttonSearch'
							variant='success'
							type='submit'
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>

			{loadingBoolean ? (
				<Loading />
			) : (
				<RecipesSearched recipes={completeRecipes} />
			)}
		</>
	);
};

export default Search;
