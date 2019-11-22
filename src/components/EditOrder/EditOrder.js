
import React from 'react';
import { connect } from 'react-redux';
import { updateOrder } from '../../actions/orders';

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
				<label id="name">Name</label>
				<br />
				<input
					type="text"
					id="name"
					name="name"
					value={this.state.name}
					onChange={this.changeState}
				/>
				<br />
				<label id="price">Price</label>
				<br />
				<input
					type="number"
					id="price"
					name="price"
					value={this.state.price}
					onChange={this.changeState}
				/>
				<br />
				<label style={{ verticalAlign: 'top' }}>Notes</label>
				<br />
				<textarea
					type="text"
					id="notes"
					name="notes"
					value={this.state.notes}
					onChange={this.changeState}
				/>
				<br />
				<button className="btn btn-one-in-row"
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
export default connect()(EditOrder);