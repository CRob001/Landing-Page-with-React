import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first componenmt
function Home() {
	return (
		<div className= "">
			<Navbar/>
			<Jumbotron/>
			<div className="cards">
				<Card title={"First Card"} content={"This is a sentance including some card content."} />
				<Card title={"Second Card"} content={"This is MORE content on a second card."} />
				<Card title={"Third Card"} content={"This is EVEN MORE content on a third card."} />
				<Card title={"Fourth Card"} content={"This is WOW EVEN MORE content on a fourth card."} />
			</div>
			<Footer/>
		</div>
	);
}

export default Home;
