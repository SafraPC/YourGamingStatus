import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "./context/sidebar";
import { UserProvider } from "./context/user";
function App() {
	return (
		<UserProvider>
			<SidebarProvider>
				<ChakraProvider>
					<ToastContainer />
					<GlobalStyles />
					<Router />
				</ChakraProvider>
			</SidebarProvider>
		</UserProvider>
	);
}

export default App;
