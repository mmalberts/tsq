import React from "react";
import BlanketCarousel from './blanketcarousel'

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

const BlanketsText = () => (
	<div className="container">
		<h1 style={styles.header}>BLANKETS</h1>
		<br/>
		<BlanketCarousel />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Our fleece-lined blankets offer another alternative to our quilts that require less fabric and labor. You provide the t-shirts, we'll help you pick the fleece.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default BlanketsText;