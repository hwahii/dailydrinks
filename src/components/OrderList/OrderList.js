
import React from 'react';
import { connect } from 'react-redux';
import { editOrder, deleteOrder } from '../../actions/orders';
import EditOrder from '../EditOrder/EditOrder';

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
			<label id="name">Name</label>
			<div className="list-text">{name}</div>
			<label id="price">Price</label>
			<div className="list-text">{price}</div>
			<label id="notes" style={{ verticalAlign: 'top' }}>Notes</label>
			<div className="list-text">{notes}</div>
			<button className="btn btn-two-in-row" onClick={onEditClick}>Edit</button>
			<button className="btn btn-two-in-row" onClick={onDeleteClick}>Delete</button>
		</li>
	);
};

const Orders = ({ orders, onEditOrderClick, onDeleteOrderClick }) => {
	return (
		<div className="order-list-view">
			<h1 className="header">Order List</h1>
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
		</div>
	);
}
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

export default connect(
	mapStateToOrdersProps,
	mapDispatchToOrdersProps
)(Orders);