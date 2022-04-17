import React, { Component } from "react";

class Counter extends Component {
	state = {
		randomImagesUrl: "https://picsum.photos/200",
		tags: ["React", "Front-end", "Programming"],
		// tags: [],
	};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	//	//.bind(this) Intancia o this do objeto atual na função handleIncrement, em vez de referenciar o objeto do documento
	//	//para não ter que refatorar isso todas as vezes, podemos utilizar de arrow functions
	//	//handleIncrement = () => {}
	// }

	render() {
		const { counter, onDelete, onChangeValue } = this.props;
		return (
			<React.Fragment>
				<div className='row'>
					<div className='col'>
						<button
							onClick={() => onDelete(counter.id)}
							className='btn btn-danger btn-sm m-2'>
							x
						</button>
						<button
							className='btn btn-secondary btn-sm m-2'
							onClick={() => {
								onChangeValue(counter, "increment");
							}}>
							+
						</button>
						<button
							className='btn btn-secondary btn-sm m-2'
							onClick={() => {
								onChangeValue(counter, "decrement");
							}}
							disabled={this.props.counter.value === 0 ? "disabled" : ""}>
							-
						</button>
						<span className={this.getBadgeClass()}>{this.formatCount()}</span>
					</div>

					<hr></hr>
					{/* <div>{this.renderTags()}</div>
				<div>{this.createRandomImage()}</div> */}
				</div>
			</React.Fragment>
		);
	}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	getBadgeClass() {
		const { value } = this.props.counter;
		let classes = "badge m-2 badge-";
		if (value < 0) {
			return (classes += "danger");
		} else if (value === 0) {
			return (classes += "warning");
		} else if (value > 0 && value < 11) {
			return (classes += "primary");
		} else {
			return (classes += "success");
		}
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

	renderTags() {
		if (this.state.tags.length === 0) {
			return <p>There are no items!</p>;
		} else {
			return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
		}
	}

	createRandomImage() {
		return <img src={this.state.randomImagesUrl} alt='Random One'></img>;
	}
}

export default Counter;
