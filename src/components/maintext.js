import React from "react";
import MainCarousel from "./maincarousel";

const styles = {
	header: {
		color: "#afafaf",
		fontFamily: "Lora",
		textAlign: "center",
		fontSize: "50px"
	},
	text : {
		 color: "#afafaf",
		 fontFamily: "Lora",
		 textAlign: "center"
	}
}

const MainText = () => (
	<div className="container">
		<h1 style={styles.header}>WELCOME</h1>
		<br/>
		<MainCarousel />
		<br/>
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8" style={styles.text}>
				<p>
					At Team Spirit Quilts, we understand that it can be difficult to part with clothing that holds sentimental value. Instead of letting it take up space in your dresser or closet, however, allow us to breathe new life into it by turning it into cuddly memorabilia.
				</p>
				<p>
					Our custom-made quilts, pillows, blankets, and teddy bears are a great way to remember a loved one, celebrate a special event, or honor the passing of an important stage in life. They make excellent gifts for people of all ages, and we will work with you every step of the way to make sure you are pleased with the outcome. 
				</p>
				<p>
					If you are interested in repurposing clothing items that you can't bear to part with, take a look at a few examples of our products using the dropdown menu above. 
				</p>
			</div>
			<div className="col-md-2"></div>
		</div>
	</div>
);

export default MainText;