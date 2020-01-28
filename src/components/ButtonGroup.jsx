import React, { Component } from 'react';
import Button from './Button';

export default class ButtonGroup extends Component {
	render() {
		return (
			<div>
				<Button onBtnClick={this.props.onStart} text='start' />
				<Button onBtnClick={this.props.onStop} text='stop' />
				<Button onBtnClick={this.props.onReset} text='reset' />
			</div>
		);
	}
}
