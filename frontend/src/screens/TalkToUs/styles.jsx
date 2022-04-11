import styled from "styled-components";

export const FormTalkToUs = styled.form`
	width: 95%;
	padding: 2rem;
	display: flex;
	flex-direction: column;

	> div {
		padding: 1rem;
		margin-top: 3rem;
		> label {
			font-size: 19px;
		}
		> input {
			margin-top: 1rem;
		}
		> textarea {
			margin-top: 1rem;
			resize: none;
		}
	}
`;
