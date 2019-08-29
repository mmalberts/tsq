import React from "react";
import BearCarousel from './bearcarousel'

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

const QuiltsText = () => (
	<div className="container">
		<h1 style={styles.header}>BEARS</h1>
		<br/>
		<BearCarousel />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<p style={styles.text}>
					Bears text goes here!
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default QuiltsText;