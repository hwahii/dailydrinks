
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

export default connect(
	mapStateToOrdersProps,
	mapDispatchToOrdersProps
)(Orders);