import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
function App() {
	return (
		<div>
			<ToastContainer />
			<GlobalStyles />
			<h1>Hello World</h1>
		</div>
	);
}

export default App;
