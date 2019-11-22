
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from '../../store';
import AddOrder from '../AddOrder';
import OrderList from '../OrderList';
import './index.css';
import logo from '../../images/logo.png';

const OrderApp = () => (
	<Router>
		<div className="app">
			<nav className="nav">
				<img className="logo" src={logo} alt="Logo" />
				<Link to="/">
					<span className="nav-link">Order List</span>
				</Link>
				<Link to="/add/">
					<span className="nav-link">Add Order</span>
				</Link>
			</nav>

			<Route path="/" exact component={OrderList} />
			<Route path="/add/" component={AddOrder} />
		</div>
	</Router>
);

const Main = () => (
	<Provider store={store}>
		<OrderApp />
	</Provider>
);

export default Main;
