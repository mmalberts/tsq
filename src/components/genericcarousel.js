import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
	},
}

class GenericCarousel extends Component {	
	render() {
		return (
			<div className="container">
				<CarouselProvider
					naturalSlideWidth={5}
					naturalSlideHeight={4}
					totalSlides={this.props.images.length}
					style={styles.carousel}
					isPlaying={true}
					interval={5000}
				>
					<Slider>
						{console.log(this.props)}
						{this.props.images.map((image, index) => 
							<Slide index={index} style={styles.slide} key={index}>
								<Image src={image} hasMasterSpinner={index == 0} />
							</Slide>
						)}				
					</Slider>
					{this.props.images.map((image, index) => 
						<Dot slide={index} style={styles.dot} key={index} />
					)}
				</CarouselProvider>
			</div>
		)
	}
}

export default GenericCarousel;