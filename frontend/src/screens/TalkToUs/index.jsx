import React, { useState } from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import { FormTalkToUs } from "./styles";
import { Textarea, Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { TOASTIFY_OPTIONS } from "../../styles/globalStyles";
import { useTalkToUs } from "../../hooks/talkToUs";
const TalkToUs = () => {
	const [description, setDescription] = useState();
	const { registerCall } = useTalkToUs();
	const handleSubmit = async () => {
		if (!description) {
			toast.error("Insira uma descrição!", TOASTIFY_OPTIONS);
			return;
		}
		if (await registerCall({ description: description })) {
			toast.success("Cadastrado com sucesso!", TOASTIFY_OPTIONS);
			setDescription("");
			return;
		}
		toast.error("Houve um erro!!", TOASTIFY_OPTIONS);
	};
	return (
		<Page screen="Fale Conosco">
			<PageContent>
				<PageTitle>Fale Conosco!</PageTitle>
				<hr />
				<FormTalkToUs>
					<div>
						<label>Descrição:</label>
						<Textarea
							borderColor="silver"
							focusBorderColor="#2b2b2b"
							variant={"outline"}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							value={description}
							type="text"
							placeholder="Insira a sua descrição aqui!"
						/>
					</div>
					<Button
						style={{
							alignSelf: "center",
						}}
						isLoading={false}
						colorScheme="green"
						loadingText="Submitting"
						variant="solid"
						onClick={handleSubmit}
					>
						Enviar
					</Button>
				</FormTalkToUs>
			</PageContent>
		</Page>
	);
};
export default TalkToUs;
