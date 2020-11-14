import React from "react";
import "./navStyle.css";
import { Link } from "react-router-dom";

const Nav = ({ children }) => {
	return (
		<div className="nav-container d-flex w-100 p-3 mx-auto flex-column">
			<header className="masthead mb-auto">
				<div className="inner">
					<h3 className="masthead-brand">Portfolio</h3>
					<nav className="nav nav-masthead justify-content-center">
						<Link 
							to="/" 
							className={
								window.location.pathname === "/" 
								? "nav-link active" 
								: "nav-link"}
						>
							Home
						</Link>
						<Link 
							to="/projects"
							className={window.location.pathname === "/projects" 
							? "nav-link active" 
							: "nav-link"}
							>
								Projects
							</Link>
						<Link 
							to="/contact" 
							className={window.location.pathname === "/contact" 
							? "nav-link active" 
							: "nav-link"}
							>
								Contact
							</Link>
					</nav>
				</div>
			</header>
			{children}
		</div>
	);
};

export default Nav;
