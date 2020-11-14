import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/projects">
				<Projects />
			</Route>
			<Route exact path="/contact">
				<Contact />
			</Route>
			{/* <Route path="*" component="NoMatch" /> */}
		</Router>
	);
}

export default App;
