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
	'./images/duvet_1.jpg'
]

const DuvetText = () => (
	<div className="container">
		<h1 style={styles.header}>DUVET COVERS</h1>
		<br/>
		<GenericCarousel images={images} />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					We can also turn your old t-shirts into custom-made duvet covers. Our duvet covers require less fabric and labor than our quilts, making them a simpler (and cheaper) alternative. Each duvet cover has a cotton backing and snaps for easy removal and cleaning.
				</p>
				<p>
					Pricing: $18/square (includes all labor and materials)
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default DuvetText;