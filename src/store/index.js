import { createStore } from 'redux';
import reducer from '../reducer/orders.js';

export default createStore(
	reducer
);