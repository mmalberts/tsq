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
	"./images/pillow_il.jpg",
	"./images/pillow_dad.jpg",
	"./images/pillow_bc.jpg",
	"./images/pillow_dad_2.jpg",
	"./images/pillow_nd.jpg"
]

const PillowsText = () => (
	<div className="container">
		<h1 style={styles.header}>PILLOWS</h1>
		<br/>
		<GenericCarousel images={images} />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Our custom pillows make a unique gift idea for the high school or college graduate. How about an end of season gift for your favorite athlete? A used football jersey makes a great oversized pillow. Have a varsity letter, but no letterman jacket? We can make a pillow in your school colors with your varsity letter in the center.
				</p>
				<p>
					Alternatively, a pillow made from favorite clothing items of a lost loved one can be a wonderful way to honor their memory.
				</p>
				<p>
					Pillow prices start at $25. Some of the covers are removable for easy washing.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default PillowsText;