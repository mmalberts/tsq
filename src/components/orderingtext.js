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

const OrderingText = () => (
	<div className="container">
		<h1 style={styles.header}>ORDERING</h1>
		<br/>
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<p style={styles.text}>
					We cannot give specific pricing since the items are made to order. Please email or call Mary Ann for an extimate or for any questions you may have.
					<br/>
					<br/>
					Our email address:
					<br/>
					maryannalberts@yahoo.com
					<br/>
					<br/>
					Our phone number:
					(630) 404-1158
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default OrderingText;