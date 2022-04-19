import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./CardDish.css";

const CardDish = ({
	recipe,
	key,
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
			<Card className='cardDish' key={key}>
				<Card.Title variant='top'>{title}</Card.Title>
				<Card.Img src={img} />
				{hs !== undefined && (
					<div className='cardText'>
						<p>Healt Score {hs}</p>
						<p>Price {price.toFixed(2)}</p>
						<p>time of preparation {time}</p>
					</div>
				)}

				<Card.Body>
					<Card.Text className='cardDescription'>{desc}</Card.Text>

					<Button className='cardButton' variant='info'>
						Details
					</Button>
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
						? addVegan
						: addNoVegan && (
								<Button
									className='cardButton'
									variant='success'
									onClick={() =>
										recipe.vegan
											? checkCanAddVegan(recipe)
											: checkCanAddNoVegan(recipe)
									}
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
