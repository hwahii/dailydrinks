
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import AddOrder from '../AddOrder';
import OrderList from '../OrderList';
import './index.css';

const OrderApp = () => (
	<div>
		<AddOrder />
		<h1>Order List</h1>
		<OrderList />
	</div>
);

const Main = () => (
	<Provider store={store}>
		<OrderApp />
	</Provider>
);

export default Main;
