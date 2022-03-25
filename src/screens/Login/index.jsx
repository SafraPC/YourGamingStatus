import React from "react";
import { LoginPage, LoginDivision, LoginForm } from "./styles";
import {
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import { Mail } from "react-feather";
import { RiLockPasswordLine, RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
const Login = () => {
	return (
		<LoginPage>
			<LoginDivision>
				<h3>YourGamingMetric</h3>
				<LoginForm>
					<InputGroup>
						<InputLeftElement
							color
							children={<Mail color="silver" size={20} />}
						/>
						<Input
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							type="email"
							placeholder="ex: safra@gmail.com"
						/>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							color
							children={<RiLockPasswordLine color="silver" size={20} />}
						/>
						<Input
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							type="password"
							placeholder="ex: safra@gmail.com"
						/>
						<InputRightElement width="3.5rem">
							<Button variant={"ghost"} colorScheme="blackAlpha">
								<RiEyeCloseLine size={20} color="white" />
							</Button>
						</InputRightElement>
					</InputGroup>
					<label>Esqueci a senha</label>
					<label>Criar conta</label>
					<Button
						colorScheme="whiteAlpha"
						loadingText="Submitting"
						variant="solid"
					>
						Logar
					</Button>
				</LoginForm>
			</LoginDivision>
		</LoginPage>
	);
};

export default Login;
