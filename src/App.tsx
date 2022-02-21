import "./styles.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<AppRoutes />
			</Router>
		</div>
	);
}

export default App;
