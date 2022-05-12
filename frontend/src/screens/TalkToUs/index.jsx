import React, { useState } from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import { FormTalkToUs } from "./styles";
import { Textarea, Button } from "@chakra-ui/react";

const TalkToUs = () => {
	const [description, setDescription] = useState();
	const handleSubmit = async () => {};
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
