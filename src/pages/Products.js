import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ProductCarousel from '../components/productcarousel';
import Quilts from './Quilts';
import Pillows from './Pillows';
import Bears from './Bears';
import Blankets from './Blankets';
import DuvetCovers from './DuvetCovers';

const styles = {
	productNav: {
		paddingLeft: "22%",
		paddingRight: "22%",
		marginBottom: "50px",
	},
	productList: {
		color: "#afafaf",
		fontFamily: "Lora",
		textAlign: "center",
		margin: "30px",
	}
}

const Products = () => (
	<BrowserRouter>
		<div className="container">
			<div className="navbar" style={styles.productNav}>
				<ul className="nav justify-content-center">
					<li>
						<Link to='/quilts' style={styles.productList}>Quilts</Link>
					</li>
					<li>
						<Link to='/pillows' style={styles.productList}>Pillows</Link>
					</li>
					<li>
						<Link to='/duvets' style={styles.productList}>Duvet Covers</Link>
					</li>					
					<li>
						<Link to='/blankets' style={styles.productList}>Blankets</Link>
					</li>					
					<li>
						<Link to='/bears' style={styles.productList}>Bears</Link>
					</li>
				</ul>
			</div>


			<Route exact path='/products' component={ProductCarousel} />
			<Route path='/quilts' component={Quilts} />
			<Route path='/pillows' component={Pillows} />
			<Route path='/duvets' component={DuvetCovers} />
			<Route path='/blankets' component={Blankets} />
			<Route path='/bears' component={Bears} />
		</div>
	</BrowserRouter>
);

export default Products;