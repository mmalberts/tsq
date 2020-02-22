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
	'./images/quilt_bluegreen.jpg',
	'./images/detail_bluegreen.jpg',
	'./images/quilt_red.jpg',
	'./images/quilt_16x16.jpg'
]

const QuiltsText = () => (
	<div className="container">
		<h1 style={styles.header}>QUILTS</h1>
		<br/>
		<GenericCarousel images={images} />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Send us your old t-shirts and we will patch them together into a unique quilt. You'll have a beautiful memento of those special concerts, annual races and events, or celebrated school teams.
				</p>
				<p>
					It's easy to order. Just provide the t-shirts, choose a style, a grid fabric, and the corner stones or stars. We will work closely with you to determine the best layout and colors for your quilt. You will approve the layout before we sew the squares together, and your quilt will be completed in 4 to 6 weeks.
				</p>
				<p>
					Quilts can be further customized by adding embroidered dedications, individual swatches or patches, and by selecting a thematic stitching pattern throughout the entire quilt.
				</p>
				<p>
					Pricing: $25/square (includes all labor and materials)
				</p>				
				<p>
					Approximate size of finished quilts and number of shirts needed:
					<br/>
					<br/>
					55" x 55" - 9 t-shirts
					<br/>
					55" x 70" - 12 t-shirts
					<br/>
					70" x 70" - 16 t-shirts
					<br/>
					70" x 85" - 20 t-shirts
					<br/>
					85" x 85" - 25 t-shirts
					<br/>
					85" x 95" - 30 t-shirts
					<br/>
					<br/>
					For reference:
					<br/>
					<br/>
					A twin-sized quilt is 59" x 85"
					<br/>
					A king-sized quilt is 96" x 96"
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default QuiltsText;