import React from "react";
import GenericCarousel from './genericcarousel'

const styles = {
	header: {
		color: '#afafaf',
		fontFamily: 'Lora',
		textAlign: 'center',
		fontSize: '50px',
	},
	text: {
		color: '#afafaf',
		fontFamily: 'Lora',
		textAlign: 'center',
	}
}

const images = [
	"./images/bear_1.jpg",
	"./images/bear_2.jpg"
]

const QuiltsText = () => (
	<div className="container">
		<h1 style={styles.header}>BEARS</h1>
		<br/>
		<GenericCarousel images={images} />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					A teddy bear made from the favorite clothing of someone you are missing one makes a wonderful gift. Give one of these a squeeze and your loved one won't feel quite so far away.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default QuiltsText;