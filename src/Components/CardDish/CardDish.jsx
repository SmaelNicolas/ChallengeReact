import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./CardDish.css";

const CardDish = ({ key, title, img, desc, add }) => {
	return (
		<Card className='cardDish' key={key}>
			<Card.Title variant='top'>{title}</Card.Title>
			<Card.Img src={img} />
			<Card.Body>
				<Card.Text className='cardDescription'>{desc}</Card.Text>
				<Button className='cardButton' variant='info'>
					Details
				</Button>
				{!add && (
					<Button className='cardButton' variant='danger'>
						Delete
					</Button>
				)}
				{add && (
					<Button className='cardButton' variant='success'>
						Add
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default CardDish;
