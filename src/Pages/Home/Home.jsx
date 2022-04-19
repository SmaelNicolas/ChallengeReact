import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardDish from "../../Components/CardDish/CardDish";
import Title from "../../Components/Title/Title";
import { MenuContext } from "../../Context/MenuContext";
import { Button, Chip } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Home.css";

const Home = () => {
	const {
		getMenu,
		deleteRecipe,
		averageTotalPriceMenu,
		averageTotalTimePreparation,
		averageTotalHealthScore,
		emptyMenu,
	} = useContext(MenuContext);

	const [deleted, setDeleted] = useState(false);

	useEffect(() => {
		//fetch url
		const fetchData = async () => {
			const result = await axios(
				"https://api.spoonacular.com/recipes/complexSearch?apiKey=0aa9b30d89cc43f3968c6c1321dee967"
			);
		};

		// fetchData();
	}, [deleted]);

	const handleDeleted = (recipe) => {
		deleteRecipe(recipe);
		setDeleted(true);
		setTimeout(() => {
			setDeleted(false);
		}, 100);
	};

	return (
		<div className='homeContainer'>
			<Title title={"MENU"} />
			<div className='infoDisplay'>
				<Chip
					icon={<MonitorHeartIcon />}
					label={`Menu Health Score ${
						averageTotalHealthScore()
							? averageTotalHealthScore().toFixed(2)
							: 0
					}`}
					color='primary'
					variant='outlined'
				/>
				<Chip
					icon={<AttachMoneyIcon />}
					label={`Menu Price ${
						averageTotalPriceMenu()
							? averageTotalPriceMenu().toFixed(2)
							: 0
					}`}
					color='primary'
					variant='outlined'
				/>
				<Chip
					icon={<AccessTimeIcon />}
					label={`Menu Time Preparation ${
						averageTotalTimePreparation()
							? averageTotalTimePreparation().toFixed(2)
							: 0
					}`}
					color='primary'
					variant='outlined'
				/>
				<Button
					variant='outlined'
					color='error'
					onClick={() => emptyMenu()}
					startIcon={<DeleteIcon />}
				>
					Delete Menu
				</Button>
			</div>
			<div className='recipesInMenu'>
				{getMenu().map((recipe) => (
					<CardDish
						recipe={recipe}
						key={recipe.id}
						title={recipe.title}
						img={recipe.img}
						desc={recipe.description}
						add={false}
						hs={recipe.helthScore}
						price={recipe.price}
						time={recipe.time}
						deleteRecipe={handleDeleted}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
