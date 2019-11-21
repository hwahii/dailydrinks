import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const order = (state, action) => {
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				id: action.id,
				name: action.name,
				price: action.price,
				notes: action.notes,
				isEditing: false
			};
		case 'UPDATE_ORDER':
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
		case 'EDIT_ORDER':
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

const orders = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ORDER':
			return [...state, order(undefined, action)];
		case 'UPDATE_ORDER':
		case 'EDIT_ORDER':
			return state.map(t => order(t, action));
		case 'DELETE_ORDER':
			return state.filter(item => {
				return item.id !== action.id;
			});
		default:
			return state;
	}
};

const orderApp = (state = {}, action) => {
	return {
		orders: orders(state.orders, action)
	};
};

const addOrder = (name, price, notes) => {
	return {
		type: 'ADD_ORDER',
		id: nextOrderId++,
		name,
		price,
		notes
	};
};

const updateOrder = (id, name, price, notes) => {
	return {
		type: 'UPDATE_ORDER',
		id,
		name,
		price,
		notes
	};
};

const editOrder = id => {
	return {
		type: 'EDIT_ORDER',
		id
	};
};

const deleteOrder = id => {
	return {
		type: 'DELETE_ORDER',
		id
	};
};

let AddOrder = ({ dispatch }) => {
	let nameInput, priceInput, notesInput;
	return (
		<div>
			<label id="name">Name: </label>
			<input
				ref={node => {
					nameInput = node;
				}}
			/>
			&nbsp;
			<label id="price">Price: </label>
			<input
				ref={node => {
					priceInput = node;
				}}
			/>
			<br />
			<label id="notes" style={{ verticalAlign: 'top' }}>
				Notes:{' '}
			</label>
			<textarea
				ref={node => {
					notesInput = node;
				}}
			/>
			<br />
			<button
				onClick={() => {
					dispatch(
						addOrder(
							nameInput.value,
							priceInput.value,
							notesInput.value
						)
					);
					nameInput.value = '';
					priceInput.value = '';
					notesInput.value = '';
				}}
			>
				Add Order
			</button>
		</div>
	);
};
AddOrder = connect()(AddOrder);

class EditOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			name: props.name,
			price: props.price,
			notes: props.notes
		};
		this.dispatch = props.dispatch;
		this.changeState = this.changeState.bind(this);
	}

	changeState(event) {
		let changeName = event.target.name;
		this.setState({ [changeName]: event.target.value });
	}
	render() {
		return (
			<div>
				<label>Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={this.state.name}
					onChange={this.changeState}
				/>
				<br />
				<label>Price: </label>
				<input
					type="text"
					id="price"
					name="price"
					value={this.state.price}
					onChange={this.changeState}
				/>
				<br />
				<label style={{ verticalAlign: 'top' }}>Notes: </label>
				<textarea
					type="text"
					id="notes"
					name="notes"
					value={this.state.notes}
					onChange={this.changeState}
				/>
				<br />
				<button
					onClick={() => {
						this.dispatch(
							updateOrder(
								this.state.id,
								this.state.name,
								this.state.price,
								this.state.notes
							)
						);
					}}
				>
					Update
				</button>
			</div>
		);
	}
}
EditOrder = connect()(EditOrder);

const Order = ({
	onEditClick,
	onDeleteClick,
	isEditing,
	id,
	name,
	price,
	notes
}) => {
	if (isEditing === true) {
		return (
			<li key={id}>
				<EditOrder id={id} name={name} price={price} notes={notes} />
			</li>
		);
	}
	return (
		<li key={id} style={{ whiteSpace: 'pre-wrap' }}>
			Name: {name}
			<br />
			Price: {price}
			<br />
			Notes: {notes}
			<br />
			<button onClick={onEditClick}>Edit</button>
			<button onClick={onDeleteClick}>Delete</button>
		</li>
	);
};

const Orders = ({ orders, onEditOrderClick, onDeleteOrderClick }) => (
	<ul>
		{orders.map(order => (
			<Order
				key={order.id}
				{...order}
				onEditClick={() => onEditOrderClick(order.id)}
				onDeleteClick={() => onDeleteOrderClick(order.id)}
			/>
		))}
	</ul>
);

const mapStateToOrdersProps = state => {
	return {
		orders: state.orders
	};
};
const mapDispatchToOrdersProps = dispatch => {
	return {
		onEditOrderClick: id => {
			dispatch(editOrder(id));
		},
		onDeleteOrderClick: id => {
			dispatch(deleteOrder(id));
		}
	};
};
const OrderList = connect(
	mapStateToOrdersProps,
	mapDispatchToOrdersProps
)(Orders);

let nextOrderId = 0;

const OrderApp = () => (
	<div>
		<AddOrder />
		<h1>Order List</h1>
		<OrderList />
	</div>
);

ReactDOM.render(
	<Provider store={createStore(orderApp)}>
		<OrderApp />
	</Provider>,
	document.getElementById('root')
);
