import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CardDish = ({ title, img, desc }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Title variant='top'>{title}</Card.Title>
			<Card.Img src={img} />
			<Card.Body>
				<Card.Text>{desc}</Card.Text>
				<Button variant='info'>Details</Button>
				<Button variant='danger'>Delete</Button>
			</Card.Body>
		</Card>
	);
};

export default CardDish;
