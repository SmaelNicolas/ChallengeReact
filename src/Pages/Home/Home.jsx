import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import CardDish from "../../Components/CardDish/CardDish";
import Title from "../../Components/Title/Title";
import { MenuContext } from "../../Context/MenuContext";
import { Button, Chip } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import { Toast } from "../../Helpers/toast";
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
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (getMenu().length === 0) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [deleted]);

	const handleDeleted = (recipe) => {
		deleteRecipe(recipe);
		setDeleted(true);
		Toast.fire({
			icon: "error",
			title: "Recipe deleted!",
		});
		setTimeout(() => {
			setDeleted(false);
		}, 100);
	};

	const handleDeleteMenu = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "Menu has been deleted", "success");
				emptyMenu();
				setDeleted(true);
				setTimeout(() => {
					setDeleted(false);
				}, 100);
			}
		});
	};

	return (
		<div className='homeContainer'>
			<Title title={"home"} />
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
					onClick={() => handleDeleteMenu()}
					startIcon={<DeleteIcon />}
					disabled={disabled}
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
