import React from "react";
import { CarouselProvider, Slider, Slide, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const styles = {
	carousel: {
		width: '50%',
		margin: '0 auto',
		textAlign: 'center',
	},
	slide: {
		textAlign: 'center',
	},
	dot: {
		margin: '0px 5px 0px 5px',
	}
}

const BearCarousel = () => (
	<div className="container">
		<CarouselProvider
			naturalSlideWidth={5}
			naturalSlideHeight={4}
			totalSlides={2}
			style={styles.carousel}
			isPlaying={true}
			interval={5000}
		>
			<Slider>
				<Slide index={0} style={styles.slide}>
					<Image src='./images/bear_1.jpg' hasMasterSpinner={true} />
				</Slide>
				<Slide index={1} style={styles.slide}>
					<Image src='./images/bear_2.jpg' />
				</Slide>
			</Slider>
			<Dot slide={0} style={styles.dot}/>
			<Dot slide={1} style={styles.dot}/>
		</CarouselProvider>
	</div>
);

export default BearCarousel;