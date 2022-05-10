import React from "react";
import { Button, Modal } from "react-bootstrap";

export const AddItemModal = ({ onHide, show }) => {
	const handleSubmit = () => {
		onHide();
	};
	return (
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			onHide={onHide}
			backdrop="static"
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="red" onClick={onHide}>
					Close
				</Button>
				<Button variant="success" onClick={handleSubmit}>
					Cadastrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
