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
	},
	note: {
		textDecoration: 'underline',
	}
}

const images = [
	"./images/ann_ob_mask.jpg",
	"./images/mask_chicago3.jpg",
	"./images/ben_rb_mask.jpg",
	"./images/mask_chicago.jpg",
	"./images/ob_masks.jpg",
	"./images/mask_packers.jpg",
	"./images/mask_sox.jpg"
]

const MaskText = () => (
	<div className="container">
		<h1 style={styles.header}>MASKS</h1>
		<br/>
		<GenericCarousel images={images} />
		<br/>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8' style={styles.text}>
				<p>
					Keep yourself safe while showing your team spirit with our face masks. Our masks are 100% cotton, made with two layers of fabric and a layer of interfacing in between, and covered elastic straps to keep your ears comfortable. We offer White Sox, Cubs, Bears, Blackhawks, and Packers masks.
				</p>
				<p>
					Please note that these face masks <span style={styles.note}>are NOT medical grade.</span>
				</p>
				<p>
					Masks are $19. Please see our Ordering page for details on how to get your own.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	</div>
);

export default MaskText;