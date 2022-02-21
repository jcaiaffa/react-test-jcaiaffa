import "./styles.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

function App() {
	return (
		<div className="App">
			<Router
				basename={
					window.location.href.split("/")[2] == "localhost:3000" ? "/" : process.env.PUBLIC_URL
				}
			>
				<Navigation />
				<AppRoutes />
			</Router>
		</div>
	);
}

export default App;
