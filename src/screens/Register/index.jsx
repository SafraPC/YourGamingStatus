import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
const Register = () => {
	const [loginPasswordState, setLoginPasswordState] = useState({
		email: "",
		password: "",
		rePassword: "",
		isPasswordVisible: false,
	});
	const navigate = useNavigate();

	return (
		<LoginPage>
			<LoginDivision>
				<h3>YourGamingMetric.com</h3>
				<LoginForm>
					<InputGroup>
						<InputLeftElement
							color
							children={<Mail color="silver" size={20} />}
						/>
						<Input
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setLoginPasswordState({
									...loginPasswordState,
									login: e.target.value,
								});
							}}
							value={loginPasswordState.login}
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
							onChange={(e) => {
								setLoginPasswordState({
									...loginPasswordState,
									password: e.target.value,
								});
							}}
							value={loginPasswordState.password}
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							type={loginPasswordState.isPasswordVisible ? "text" : "password"}
							placeholder="ex: 123@"
						/>
						<InputRightElement width="3.5rem">
							<Button
								variant={"ghost"}
								colorScheme="blackAlpha"
								onClick={() =>
									setLoginPasswordState({
										...loginPasswordState,
										isPasswordVisible: !loginPasswordState.isPasswordVisible,
									})
								}
							>
								{!loginPasswordState.isPasswordVisible ? (
									<RiEyeCloseLine size={20} color="white" />
								) : (
									<RiEyeLine size={20} color="white" />
								)}
							</Button>
						</InputRightElement>
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							color
							children={<Mail color="silver" size={20} />}
						/>
						<Input
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setLoginPasswordState({
									...loginPasswordState,
									rePassword: e.target.value,
								});
							}}
							value={loginPasswordState.rePassword}
							type={loginPasswordState.isPasswordVisible ? "text" : "password"}
							placeholder="ex: 123@"
						/>
					</InputGroup>
					<label
						onClick={() => {
							navigate("/login");
						}}
					>
						Já tenho conta
					</label>
					<Button
						colorScheme="whiteAlpha"
						loadingText="Submitting"
						variant="solid"
						onClick={() => console.log(loginPasswordState)}
					>
						Cadastrar
					</Button>
				</LoginForm>
			</LoginDivision>
		</LoginPage>
	);
};

export default Register;
