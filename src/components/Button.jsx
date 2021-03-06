import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<button
				className={this.props.btnCssClass}
				onClick={this.props.onBtnClick}
			>
				{this.props.text}
			</button>
		);
	}
}
