import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
	return (
		<div>
			<ChakraProvider>
				<ToastContainer />
				<GlobalStyles />
				<Router />
			</ChakraProvider>
		</div>
	);
}

export default App;
