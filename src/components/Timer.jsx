import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';

export default class Timer extends Component {
	state = {
		initialValue: 5,
		duration: 5,
		handle: 0,
		message: '',
	};
	count = () => {
		this.setState({
			duration: parseInt(this.state.duration) - 1,
		});

		if (this.state.duration === 0) {
			this.clean();
		}
	};

	clean = (message = 'Compte à rebours réinitialisé') => {
		clearInterval(this.state.handle);
		this.setState({ message });
	};

	componentDidMount() {
		this.start();
	}

	start = () => {
		this.setState({ message: '' });
		const handle = setInterval(() => {
			this.count();
		}, 1000);

		this.setState({ handle });
	};

	stop = () => {
		this.clean('Compte à rebours stoppé');
	};

	reset = () => {
		this.clean();
		this.setState({ duration: this.state.initialValue });
	};
	render() {
		return (
			<div>
				<h3>Pomodoro</h3>
				<h3>{this.state.message}</h3>
				<div>Durée: {this.state.duration}</div>
				<ButtonGroup
					onStart={this.start}
					onStop={this.stop}
					onReset={this.reset}
				/>
			</div>
		);
	}
}
