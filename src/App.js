import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MainCarousel from './components/maincarousel';
import About from './pages/About';
import Products from './pages/Products';
import Ordering from './pages/Ordering';

const styles = {
	navlink: {
		color: "#afafaf",
		fontFamily: "Lora",
		margin: "10px",
	}
}

const App = () => (
	<BrowserRouter>
		<div className="container">
			<nav className="navbar">
				<Link to='/'><img src="./images/tsqlogo.png"></img></Link>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<Link to='/about' style={styles.navlink}>ABOUT US</Link>
					</li>
					<li className="nav-item">
						<Link to='/products' style={styles.navlink}>PRODUCTS</Link>
					</li>
					<li className="nav-item">
						<Link to='/ordering' style={styles.navlink}>ORDERING</Link>
					</li>
				</ul>
			</nav>
			<Route exact path='/' component={MainCarousel} />
			<Route exact path='/about' component={About} />
			<Route exact path='/products' component={Products} />
			<Route exact path='/ordering' component={Ordering} />
		</div>
	</BrowserRouter>
);

export default App;
