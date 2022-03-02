import "./styles.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
