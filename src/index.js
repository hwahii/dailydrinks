import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddOrder from './component/AddOrder';
import OrderList from './component/OrderList';
import './index.css';

const OrderApp = () => (
	<div>
		<AddOrder />
		<h1>Order List</h1>
		<OrderList />
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<OrderApp />
	</Provider>,
	document.getElementById('root')
);
