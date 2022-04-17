import React, { Component } from "react";

class Navbar extends Component {
	render() {
		const { defaultGitHubUrl } = this.props;

		return (
			<React.Fragment>
				<nav className='navbar navbar-light bg-light'>
					<a className='navbar-brand'>Bruno Andrade's Counter Application</a>
					<a
						className='navbar-brand'
						href={defaultGitHubUrl}
						target='_blank'
						rel='noreferrer'>
						Git Hub
					</a>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
