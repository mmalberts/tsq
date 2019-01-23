import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Quilts from './pages/Quilts';
import Pillows from './pages/Pillows';
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
						<Link to='quilts' style={styles.navlink}>QUILTS</Link>
					</li>
					<li className="nav-item">
						<Link to='/pillows' style={styles.navlink}>PILLOWS</Link>
					</li>
					<li className="nav-item">
						<Link to='/ordering' style={styles.navlink}>ORDERING</Link>
					</li>
				</ul>
			</nav>
			<Route path='/about' component={About} />
			<Route path='/quilts' component={Quilts} />
			<Route path='/pillows' component={Pillows} />
			<Route path='/ordering' component={Ordering} />
		</div>
	</BrowserRouter>
);

export default App;
