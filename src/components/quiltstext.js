import React from "react";
import QuiltCarousel from './quiltcarousel'

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
		<h1 style={styles.header}>QUILTS</h1>
		<br/>
		<QuiltCarousel />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<p style={styles.text}>
					Wondering what to do with t-shirts you've collected but really never wear? You can't bear to part with them, but you need the closet space.
					<br/>
					<br/>
					Well, now there's a solution - patch them together into a unique quilt. You'll have a beautiful memento of those special concerts, annual races and events, or celebrated school teams.
					<br/>
					<br/>
					We can also take special swatches from your childhood or an embroidered dedication and make an eclectic style quilt. It's a mix of 20 to 30 pieces of any of your favorite fabrics.
					<br/>
					<br/>
					It's easy to order. Just provide the t-shirts, choose a style, a grid fabric, and the corner stones or stars, and we'll do the rest.
					<br/>
					<br/>
					We will work closely with you to determine the best layout and colors for your quilt. The actual stitching throughout the quilt can be a design of your choice. There are so many to choose from, depending on the theme of the quilt and the interests of the recipient.
					<br/>
					<br/>
					You will approve the layout before we sew the squares together, and your quilt will be completed in 4 to 6 weeks.
					<br/>
					<br/>
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