import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first componenmt
function Home() {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
			<div className="cards">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
}

export default Home;
