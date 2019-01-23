import React from "react";

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

const Pillows = () => (
	<div className="container">
		<h1 style={styles.header}>PILLOWS</h1>
		<br/>
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<p style={styles.text}>
					Give me your tired, your worn, your favorite t-shirts, and I will breathe new life into them by making them into a soft, comfy pillow.
					<br/>
					<br/>
					A unique gift idea for the high school or college graduate. How about an end of season gift for your favorite athlete? A used football jersey makes a great oversized pillow. Any sports fan would love to lay their head on a pillow with their team logo. Have a varsity letter, but no varsity jacket? We can make a beautiful pillow in your school colors with the varsity letter in the center.
					<br/>
					<br/>
					Pillow prices start at $25. Some of the covers are removable for easy washing.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default Pillows;