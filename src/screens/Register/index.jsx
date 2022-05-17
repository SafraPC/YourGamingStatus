import React, { useState } from "react";
import { LoginPage, LoginDivision, LoginForm } from "./styles";
import {
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import { Mail, User } from "react-feather";
import { RiLockPasswordLine, RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth";
const Register = () => {
	const [loginPasswordState, setLoginPasswordState] = useState({
		email: "",
		password: "",
		name: "",
		rePassword: "",
	});
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const { loading, register } = useLogin();

	const handleSubmit = async () => {
		if (
			await register(
				loginPasswordState.email,
				loginPasswordState.name,
				loginPasswordState.password,
				loginPasswordState.rePassword
			)
		) {
			navigate("/home");
		}
	};

	return (
		<LoginPage>
			<LoginDivision>
				<h3>YourGamingMetric.com</h3>
				<LoginForm>
					<InputGroup>
						<InputLeftElement
							color
							children={<User color="silver" size={20} />}
						/>
						<Input
							focusBorderColor="#2b2b2b"
							variant={"flushed"}
							onChange={(e) => {
								setLoginPasswordState({
									...loginPasswordState,
									name: e.target.value,
								});
							}}
							value={loginPasswordState.name}
							type="text"
							placeholder="ex: Leandro"
						/>
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
									email: e.target.value,
								});
							}}
							value={loginPasswordState.email}
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
							type={passwordVisible ? "text" : "password"}
							placeholder="ex: 123@"
						/>
						<InputRightElement width="3.5rem">
							<Button
								variant={"ghost"}
								colorScheme="blackAlpha"
								onClick={() => setPasswordVisible(!passwordVisible)}
							>
								{!passwordVisible ? (
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
							type={passwordVisible ? "text" : "password"}
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
						isLoading={loading}
						colorScheme="whiteAlpha"
						loadingText="Submitting"
						variant="solid"
						onClick={handleSubmit}
					>
						Cadastrar
					</Button>
				</LoginForm>
			</LoginDivision>
		</LoginPage>
	);
};

export default Register;
