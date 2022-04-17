import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const { counters, onDelete, onChangeValue, onReset } = this.props;
		return (
			<React.Fragment>
				<br></br>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onChangeValue={onChangeValue}
						counter={counter}
					/>
				))}
				<button className='btn btn-primary btn-sm m-2' onClick={onReset}>
					Reset Values
				</button>
				<br></br>
				<p className='badge badge-pill badge-secondary m-2'>
					Total: {counters.filter((c) => c.value > 0).length}
				</p>
			</React.Fragment>
		);
	}
}

export default Counters;
