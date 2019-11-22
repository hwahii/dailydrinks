import { ADD_ORDER, UPDATE_ORDER, EDIT_ORDER, DELETE_ORDER } from '../actions/orders';
import order from './order';

const orderApp = (state = {}, action) => {
	return {
		orders: orders(state.orders, action)
	};
};

const orders = (state = [], action) => {
	switch (action.type) {
		case ADD_ORDER:
			return [...state, order(undefined, action)];
		case UPDATE_ORDER:
		case EDIT_ORDER:
			return state.map(t => order(t, action));
		case DELETE_ORDER:
			return state.filter(item => {
				return item.id !== action.id;
			});
		default:
			return state;
	}
};

export default orderApp;