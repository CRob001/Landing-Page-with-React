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
				<Card title={"First Card"} content={"This is a sentence including some card content."} src={"https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg"} />
				<Card title={"Second Card"} content={"This is MORE content on a second card."} src={"https://media.istockphoto.com/id/1268120626/photo/prague-old-town-staircase-ladder-illuminated-by-street-light-at-night-czech-republic.jpg?s=1024x1024&w=is&k=20&c=nIRiYkagzqfqUAsYayY3kMt0NyGpBYpvy8yZPCRr8Ms="}/>
				<Card title={"Third Card"} content={"This is EVEN MORE content on a third card."} src={"https://media.istockphoto.com/id/182236320/photo/red-carpet-on-a-marble-stairway.jpg?s=1024x1024&w=is&k=20&c=EPfxwG1v4A98B9KFmqUcpCJv0PkWwW4AGQ4gjji4KIc="}/>
				<Card title={"Fourth Card"} content={"This is WOW EVEN MORE content on a fourth card."} src={"https://media.istockphoto.com/id/1151241499/photo/modern-business-center-stairs-as-a-architecture-element.jpg?s=1024x1024&w=is&k=20&c=HDAMAmMJsjLB-gQK5fk8M-8Nf9AvpVwJyP5cbusFlqE="}/>
			</div>
			<Footer/>
		</div>
	);
}

export default Home;
