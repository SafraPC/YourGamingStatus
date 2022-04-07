import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "./context/sidebar";
function App() {
	return (
		<SidebarProvider>
			<ChakraProvider>
				<ToastContainer />
				<GlobalStyles />
				<Router />
			</ChakraProvider>
		</SidebarProvider>
	);
}

export default App;
