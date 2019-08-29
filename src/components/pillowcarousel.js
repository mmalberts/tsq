import React from "react";
import { CarouselProvider, Slider, Slide, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const styles = {
	carousel: {
		width: '70%',
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

const PillowCarousel = () => (
	<div className="container">
		<CarouselProvider
			naturalSlideWidth={5}
			naturalSlideHeight={3}
			totalSlides={3}
			style={styles.carousel}
			isPlaying={true}
			interval={3000}
		>
			<Slider>
				<Slide index={0} style={styles.slide}>
					<Image src='./images/placeholder1.jpeg' hasMasterSpinner={true} />
				</Slide>
				<Slide index={1} style={styles.slide}>
					<Image src='./images/placeholder2.jpeg' hasMasterSpinner={true} />
				</Slide>
				<Slide index={2} style={styles.slide}>
					<Image src='./images/placeholder3.jpeg' hasMasterSpinner={true} />
				</Slide>
			</Slider>
			<Dot slide={0} style={styles.dot}/>
			<Dot slide={1} style={styles.dot}/>
			<Dot slide={2} style={styles.dot}/>
		</CarouselProvider>
	</div>
);

export default PillowCarousel;