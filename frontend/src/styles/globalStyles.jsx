import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
 }
 a {
    text-decoration: none;
  }
input,textarea {
    transition:border 0.3s ease;
    border-radius:0.2rem;
    transition:box-shadow 0.1s ease;
 }
 button {
    cursor: pointer;
    border: 0;
 }
 html, body, #root {
    min-height: 100%;
    width: 100%;
 }
*, button, input,textarea {
border: 0;
background: none;
outline: 0 !important;
font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
}
body{
    font:14px 'Roboto', sans-serif;
    -webkit-font-font-smoothing: antialiased !important;
    background:#fcffff;
    color:#333;
}
`;
export const TOASTIFY_OPTIONS = {
	position: "top-right",
	autoClose: 6500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: false,
	style: { fontSize: 16 },
};
