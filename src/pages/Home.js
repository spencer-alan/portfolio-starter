import React from "react";
import Footer from "../components/Footer/footer";
import HomeInfo from "../components/Info/homeInfo";
import Nav from "../components/Nav/nav";

function Home() {
	return (
		<>
			<Nav>
				<HomeInfo />
				<Footer />
			</Nav>
		</>
	);
}

export default Home;
