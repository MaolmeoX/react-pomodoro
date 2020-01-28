import React, { Component } from 'react';

export default class ButtonGroup extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onStart}>start</button>
				<button onClick={this.props.onStop}>stop</button>
				<button onClick={this.props.onReset}>reset</button>
			</div>
		);
	}
}
