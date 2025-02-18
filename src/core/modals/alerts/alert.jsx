/* eslint-disable react/prop-types */
import React from "react";
import { Button, Modal } from "react-bootstrap";

const AlertModal = ({ show, onHide, title, message, variant }) => {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={`alert alert-${variant}`} role="alert">
					{message}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AlertModal;
