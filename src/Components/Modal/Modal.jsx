import React from "react";
import "./Modal.css";

const Modal = ({ title, message, fn }) => {
	return (
		<div className='modalContainer'>
			<div className='modalMessage'>
				<h2>{title}</h2>
				<p>{message} recipe limit reached</p>

				<button
					onClick={() => fn()}
					type='button'
					class='btn btn-secondary'
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
