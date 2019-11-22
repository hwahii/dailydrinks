import { ADD_ORDER, UPDATE_ORDER, EDIT_ORDER } from '../actions/orders';

const order = (state, action) => {
	switch (action.type) {
		case ADD_ORDER:
			return {
				id: action.id,
				name: action.name,
				price: action.price,
				notes: action.notes,
				isEditing: false
			};
		case UPDATE_ORDER:
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				name: action.name,
				price: action.price,
				notes: action.notes,
				isEditing: false
			};
		case EDIT_ORDER:
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				isEditing: true
			};
		default:
			return state;
	}
};

export default order;
