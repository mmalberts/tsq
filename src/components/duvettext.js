import React from "react";
import DuvetCarousel from './duvetcarousel'

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

const DuvetText = () => (
	<div className="container">
		<h1 style={styles.header}>DUVET COVERS</h1>
		<br/>
		<DuvetCarousel />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<p style={styles.text}>
					Duvet Covers text goes here!
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default DuvetText;