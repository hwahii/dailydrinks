import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/orders';

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
export default connect()(AddOrder);