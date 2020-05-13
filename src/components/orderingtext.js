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
	},
	link: {		
		color: "#8a8a8a",
		fontFamily: "Lora",
		textDecoration: "underline"
	}
}

const OrderingText = () => (
	<div className="container">
		<h1 style={styles.header}>ORDERING</h1>
		<br/>
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Pricing Information:
				</p>
				<p>
					Masks: $19
					<br/>
					Quilts: $25/square
					<br/>
					Duvet covers: $16/square
					<br/>
					Blankets: $10/square
					<br/>
					Pillows: starting at $25
					<br/>
					Bears: contact us for more information
					<br/>
					<br/>
					Prices include all labor and materials
				</p>
				<p>
					Our email address:
					<br/>
					maryannalberts@yahoo.com
				</p>
				<p>
					Our phone number: (630) 404-1158
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default OrderingText;