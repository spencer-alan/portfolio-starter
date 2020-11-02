import React from "react";
import "./navStyle.css";
import { Link } from "react-router-dom";

const Nav = ({ children }) => {
	return (
		<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<header className="masthead mb-auto">
				<div className="inner">
					<h3 className="masthead-brand">Portfolio</h3>
					<nav className="nav nav-masthead justify-content-center">
						<Link to="/" className="nav-link active">Home</Link>
						<Link to="/projects" className="nav-link">Projects</Link>
						<Link to="/about" className="nav-link">About</Link>
						<Link to="/contact" className="nav-link">Contact</Link>
					</nav>
				</div>
			</header>
			{children}
		</div>
	);
};

export default Nav;
