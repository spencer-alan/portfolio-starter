import React from "react";
import "./footer.css";

function Footer() {
	return (
		<footer className="footer mt-auto py-3">
			<div className="inner">
			<p>Spencer Smith | 2020</p>
				<div>
					<ul className="list-inline">
						<li className="list-inline-item">
							<a 
								href="https://www.linkedin.com/in/spencer-smith-7b68461a6/"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li className="list-inline-item">||</li>
						<li className="list-inline-item">
							<a 
								href="https://github.com/spencer-alan" 
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
