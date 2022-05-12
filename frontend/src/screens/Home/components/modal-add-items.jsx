import { Input, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalForm, ModalInputField, ModalLabel } from "../styles";
import { TOASTIFY_OPTIONS } from "../../../styles/globalStyles";
import { useGames } from "../../../hooks/games";

export const AddItemModal = ({ onHide, show }) => {
	const { registerGame } = useGames();
	const handleSubmit = async () => {
		if (
			!formData.gameGender ||
			!formData.gameName ||
			!formData.qtdAchievement ||
			!formData.qtdHoursPlayed ||
			!formData.rate
		) {
			setFormError(true);
			toast.error(
				"Houve um erro! verifique os campos e tente novamente.",
				TOASTIFY_OPTIONS
			);
			return;
		}
		if (await registerGame(formData)) {
			toast.success("Jogo cadastrado com sucesso!", TOASTIFY_OPTIONS);
			onHide();
			return;
		}
		toast.ERROR("Houve um erro ao cadastrar o jogo", TOASTIFY_OPTIONS);
		onHide();
	};
	const [formData, setFormData] = React.useState({
		gameName: undefined,
		gameGender: undefined,
		qtdAchievement: undefined,
		qtdHoursPlayed: undefined,
		rate: undefined,
	});
	const [formError, setFormError] = React.useState(false);

	const withError = (item) => {
		return formError && !item;
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
					Adicionar Jogo as Métricas
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ModalForm>
					<ModalInputField>
						<ModalLabel>Nome do jogo:</ModalLabel>
						<Input
							isInvalid={withError(formData.gameName)}
							errorBorderColor="red.300"
							focusBorderColor="#2b2b2b"
							variant={"filled"}
							onChange={(e) => {
								setFormData({
									...formData,
									gameName: e.target.value,
								});
							}}
							value={formData.gameName}
							type="text"
							placeholder="ex: The Last of Us"
						/>
					</ModalInputField>
					<ModalInputField>
						<ModalLabel>Gênero do jogo:</ModalLabel>
						<Select
							isInvalid={withError(formData.gameGender)}
							focusBorderColor="#2b2b2b"
							variant={"filled"}
							value={formData.gameGender}
							onChange={(e) => {
								setFormData({
									...formData,
									gameGender: e.target.value,
								});
							}}
						>
							<option value="Ação">Ação</option>
							<option value="Aventura">Aventura</option>
							<option value="RPG">RPG</option>
							<option value="Simulação">Simulação</option>
							<option value="Puzzle">Puzzle</option>
							<option value="Esporte">Esporte</option>
							<option value="Estratégia">Estratégia</option>
							<option value="Terror">Terror</option>
							<option value="RTS">RTS</option>
							<option value="FPS">FPS</option>
						</Select>
					</ModalInputField>
					<ModalInputField>
						<ModalLabel>Quantidade de conquistas:</ModalLabel>
						<Input
							isInvalid={withError(formData.qtdAchievement)}
							focusBorderColor="#2b2b2b"
							variant={"filled"}
							value={formData.qtdAchievement}
							onChange={(e) => {
								setFormData({
									...formData,
									qtdAchievement: e.target.value,
								});
							}}
							type="number"
							placeholder="ex: The Last of Us"
						/>
					</ModalInputField>
					<ModalInputField>
						<ModalLabel>Horas jogadas:</ModalLabel>
						<Input
							isInvalid={withError(formData.qtdHoursPlayed)}
							focusBorderColor="#2b2b2b"
							variant={"filled"}
							onChange={(e) => {
								setFormData({
									...formData,
									qtdHoursPlayed: e.target.value,
								});
							}}
							type="number"
							placeholder="ex: The Last of Us"
						/>
					</ModalInputField>
					<ModalInputField>
						<ModalLabel style={{ alignSelf: "center" }}>
							Gostou do jogo?
						</ModalLabel>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-evenly",
							}}
						>
							<RadioGroup
								isInvalid={withError(formData.rate)}
								onChange={(e) => {
									setFormData({
										...formData,
										rate: e,
									});
								}}
							>
								<Stack direction="row">
									<Radio value="10">Sim</Radio>
									<Radio value="5">Mais ou menos</Radio>
									<Radio value="0">Não</Radio>
								</Stack>
							</RadioGroup>
						</div>
					</ModalInputField>
				</ModalForm>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={onHide}>
					Close
				</Button>
				<Button type="submit" variant="success" onClick={handleSubmit}>
					Cadastrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
