import React from "react";
import "./header.css";

function Header({ title, children }) {
	return (
		<header id="title" className="container">
			<h1 style={{ fontWeight: "bold" }}>{title}</h1>
			{children}
		</header>
	);
}

export default Header;
