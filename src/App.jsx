import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "./context/sidebar";
import { UserProvider } from "./context/user";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
		measurementId: process.env.REACT_APP_MEASUREMENT_ID,
	};

	React.useEffect(() => {
		const app = initializeApp(firebaseConfig);
		getAnalytics(app);
	}, []);

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
