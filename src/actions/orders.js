let nextOrderId = 0;

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (name, price, notes) => {
	return {
		type: 'ADD_ORDER',
		id: nextOrderId++,
		name,
		price,
		notes
	};
};

export const UPDATE_ORDER = 'UPDATE_ORDER';

export const updateOrder = (id, name, price, notes) => {
	return {
		type: 'UPDATE_ORDER',
		id,
		name,
		price,
		notes
	};
};

export const EDIT_ORDER = 'EDIT_ORDER';

export const editOrder = id => {
	return {
		type: 'EDIT_ORDER',
		id
	};
};

export const DELETE_ORDER = 'DELETE_ORDER';

export const deleteOrder = id => {
	return {
		type: 'DELETE_ORDER',
		id
	};
};