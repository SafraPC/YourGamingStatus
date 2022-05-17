import styled from "styled-components";

export const LoginPage = styled.div`
	width: 100%;
	height: 100%;
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(64, 130, 130);
	background: linear-gradient(
		0deg,
		rgba(64, 130, 130, 1) 20%,
		rgba(36, 36, 36, 1) 80%
	);
`;

export const LoginDivision = styled.div`
	padding: 1rem;
	width: 500px;
	@media screen and (max-width: 700px) {
		width: 75%;
	}
	display: flex;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.26);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(100px);
	-webkit-backdrop-filter: blur(100px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	align-items: center;
	> h3 {
		color: white;
		font-size: 20px;
	}
`;
export const LoginForm = styled.div`
	padding: 2rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> div {
		margin-top: 2rem;
	}
	> label {
		margin-top: 2rem;
		color: white;
		cursor: pointer;
	}
	> button {
		margin-top: 2rem;
	}
`;
