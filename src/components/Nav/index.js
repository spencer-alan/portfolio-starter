import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" href="/">
				Navbar
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link
							to="/"
							className={
								window.location.pathname === "/"
									? "nav-link active"
									: "nav-link"
							}
						>
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/projects"
							className={
								window.location.pathname === "/projects"
									? "nav-link active"
									: "nav-link"
							}
						>
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/about"
							className={
								window.location.pathname === "/about"
									? "nav-link active"
									: "nav-link"
							}
						>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/contact"
							className={
								window.location.pathname === "/contact"
									? "nav-link active"
									: "nav-link"
							}
						>
							Contact
						</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-info my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Nav;
