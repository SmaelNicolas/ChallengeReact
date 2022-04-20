import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardDish.css";

const CardDish = ({
	recipe,
	id,
	title,
	img,
	desc,
	add,
	addVegan,
	addNoVegan,
	hs,
	price,
	time,
	deleteRecipe,
	checkCanAddVegan,
	checkCanAddNoVegan,
}) => {
	return (
		<>
			<Card className='cardDish' key={title}>
				<Card.Title variant='top'>{title}</Card.Title>
				<Card.Img src={img} />
				{hs !== undefined && (
					<div className='cardText'>
						<p>Healt Score {hs}</p>
						<p>Price {price.toFixed(2)}</p>
						<p>Time of preparation {time} minutes</p>
					</div>
				)}

				<Card.Body>
					<Card.Text className='cardDescription'>{desc}</Card.Text>

					<Link
						className='cardButton cardButtonLink'
						to={`/detail/${id}`}
					>
						Details
					</Link>

					{!add && (
						<Button
							className='cardButton'
							variant='danger'
							onClick={() => deleteRecipe(recipe)}
						>
							Delete
						</Button>
					)}
					{recipe.vegan
						? addVegan && (
								<Button
									className='cardButton'
									variant='success'
									onClick={() => checkCanAddVegan(recipe)}
								>
									Add
								</Button>
						  )
						: addNoVegan && (
								<Button
									className='cardButton'
									variant='success'
									onClick={() => checkCanAddNoVegan(recipe)}
								>
									Add
								</Button>
						  )}
				</Card.Body>
			</Card>
		</>
	);
};

export default CardDish;
