import React, { Component } from 'react';
import Button from './Button';

export default class ButtonGroup extends Component {
	render() {
		return (
			<div>
				<Button
					btnCssClass='btn btn-primary'
					onBtnClick={this.props.onStart}
					text='start'
				/>
				<Button
					btnCssClass='btn btn-danger'
					onBtnClick={this.props.onStop}
					text='stop'
				/>
				<Button
					btnCssClass='btn btn-warning'
					onBtnClick={this.props.onReset}
					text='reset'
				/>
			</div>
		);
	}
}
