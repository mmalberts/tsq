import React from "react";
import PillowCarousel from './pillowcarousel'

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

const PillowsText = () => (
	<div className="container">
		<h1 style={styles.header}>PILLOWS</h1>
		<br/>
		<PillowCarousel />
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