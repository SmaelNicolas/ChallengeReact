import axios from "axios";
import React, { useEffect } from "react";
import CardDish from "../../Components/CardDish/CardDish";
import Title from "../../Components/Title/Title";
import "./Home.css";

const Home = () => {
	useEffect(() => {
		//fetch url
		const fetchData = async () => {
			const result = await axios(
				"https://api.spoonacular.com/recipes/complexSearch?apiKey=0aa9b30d89cc43f3968c6c1321dee967"
			);
			console.log(result);
		};

		// fetchData();
	}, []);

	return (
		<div className='homeContainer'>
			<Title title={"MENU"} />
			<CardDish />
		</div>
	);
};

export default Home;
