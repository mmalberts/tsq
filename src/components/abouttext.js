import React from "react";
import AboutCarousel from './aboutcarousel'

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

const AboutText = () => (
	<div className="container">
		<h1 style={styles.header}>ABOUT US</h1>
		<br/>
		<AboutCarousel />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Team Spirit Quilts is a small company that takes pride in our quality products. Know that your treasured t-shirts are in good hands. Here are the steps we will take to transform your shirts into a quilt that will last for many years:
				</p>
				<p>
					After we recieve your shirts, we will create a layout for your custom quilt. You will be asked to approve the design and material selection of sashing and border before we go to the next step.
				</p>
				<p>
					We then prepare the individual t-shirts with a backing to keep them from stretching. They are sewn together to form the quilt top.
				</p>
				<p>
					Our traditional quilts have a low-loft cotton backing, sashing (fabric between squares) and borders around the edge. This quilt is then machine quilted throughout with the stitching of your choice.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default AboutText;