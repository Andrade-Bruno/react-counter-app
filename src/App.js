import React, { Component } from 'react';

import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    defaultGitHubUrl: 'https://github.com/Andrade-Bruno',
		counters: [
			{ id: 1, value: -1 },
			{ id: 2, value: 0 },
			{ id: 3, value: 1 },
			{ id: 4, value: 11 },
		],
	};
	
  render() {
    return (
    <React.Fragment>
      <main className='container'>
        <Navbar 
        defaultGitHubUrl={this.state.defaultGitHubUrl}/>
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onChangeValue={this.handleValue}
        />
      </main>
    </React.Fragment>
  );}

	handleDelete = (counterId) => {
		const newCounters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: newCounters });
	};

	handleReset = () => {
		const newCounters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters: newCounters });
	};

	handleValue = (c, action) => {
		const newCounters = [...this.state.counters];
		const index = newCounters.indexOf(c);
		newCounters[index] = { ...c };
		if (action === "increment") {
			newCounters[index].value++;
		} else {
			if (newCounters[index].value > 0) {
				newCounters[index].value--;
			}
		}
		this.setState({ counters: newCounters });
	};
  
}

export default App;
