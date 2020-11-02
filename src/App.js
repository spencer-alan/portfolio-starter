import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/contact" component={Contact} />
			{/* <Route path="*" component="NoMatch" /> */}
		</Router>
	);
}

export default App;
