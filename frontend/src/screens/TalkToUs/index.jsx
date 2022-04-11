import React, { useContext, useState } from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import { FormTalkToUs } from "./styles";
import { Input, Textarea, Button } from "@chakra-ui/react";
import { UserContext } from "../../context/user";

const TalkToUs = () => {
	const { email, username } = useContext(UserContext);
	const [talkToUsForms, setTalkToUsForm] = useState({
		email: email,
		username: username,
		description: "",
	});
	const handleSubmit = async () => {};
	return (
		<Page screen="Fale Conosco">
			<PageContent>
				<PageTitle>Fale Conosco!</PageTitle>
				<hr />
				<FormTalkToUs>
					<div>
						<label>Nome:</label>
						<Input
							borderColor="silver"
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setTalkToUsForm({
									...talkToUsForms,
									username: e.target.value,
								});
							}}
							value={talkToUsForms.username}
							type="text"
							placeholder="ex: Leandro Safra"
						/>
					</div>
					<div>
						<label>Email:</label>
						<Input
							borderColor="silver"
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setTalkToUsForm({
									...talkToUsForms,
									email: e.target.value,
								});
							}}
							value={talkToUsForms.email}
							type="email"
							placeholder="ex: safra@gmail.com"
						/>
					</div>
					<div>
						<label>Descrição:</label>
						<Textarea
							borderColor="silver"
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setTalkToUsForm({
									...talkToUsForms,
									description: e.target.value,
								});
							}}
							value={talkToUsForms.description}
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
