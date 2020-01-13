import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Quilts from './pages/Quilts';
import Pillows from './pages/Pillows';
import Bears from './pages/Bears';
import Blankets from './pages/Blankets';
import DuvetCovers from './pages/DuvetCovers';
import Ordering from './pages/Ordering';

const styles = {
	navlink: {
		color: "#afafaf",
		fontFamily: "Lora",
		margin: "10px",
	},
	ddlink: {
		color: "#afafaf",
		fontFamily: "Lora"		
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
						<div className="dropdown show">
							<a className="dropdown-toggle" style={styles.navlink} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								PRODUCTS
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<Link to="/quilts" className="dropdown-item" style={styles.ddlink}>Quilts</Link>
								<Link to="/pillows" className="dropdown-item" style={styles.ddlink}>Pillows</Link>
								<Link to="/duvets" className="dropdown-item" style={styles.ddlink}>Duvet Covers</Link>
								<Link to="/blankets" className="dropdown-item" style={styles.ddlink}>Blankets</Link>
								<Link to="/bears" className="dropdown-item" style={styles.ddlink}>Bears</Link>
							</div>
						</div>
					</li>
					<li className="nav-item">
						<Link to='/ordering' style={styles.navlink}>ORDERING</Link>
					</li>
				</ul>
			</nav>
			<Route exact path='/' component={Main} />
			<Route exact path='/about' component={About} />
			<Route exact path='/ordering' component={Ordering} />
			<Route exact path='/quilts' component={Quilts} />
			<Route exact path='/pillows' component={Pillows} />
			<Route exact path='/duvets' component={DuvetCovers} />
			<Route exact path='/blankets' component={Blankets} />
			<Route exact path='/bears' component={Bears} />
		</div>
	</BrowserRouter>
);

export default App;
