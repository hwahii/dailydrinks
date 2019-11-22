import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/orders';
import menu from '../../images/menu.png';

let AddOrder = ({ dispatch }) => {
	let nameInput, priceInput, notesInput;
	return (
		<div className="add-order-view">
			<div>
				<h1 className="header">Add Order</h1>
				<label id="name">Name</label>
				<br />
				<input
					type="text"
					ref={node => {
						nameInput = node;
					}}
				/>
				<br />
				<label id="price">Price</label>
				<br />
				<input
					type="number"
					ref={node => {
						priceInput = node;
					}}
				/>
				<br />
				<label id="notes" style={{ verticalAlign: 'top' }}>Notes</label>
				<br />
				<textarea
					ref={node => {
						notesInput = node;
					}}
				/>
				<br />
				<button className="btn btn-one-in-row"
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
			<div>
				<img className="menu" src={menu} alt="menu" />
			</div>
		</div>
		
	);
};
export default connect()(AddOrder);