import React from 'react'
import Radium from 'radium'
import Thumb from './Thumb'

class VotingButtons extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			up:false,
			down:false
		}
	}

	render () {
		return (
			<div>
				<Thumb handleClick={this._handleUp.bind(this)} active={this.state.up} ref="up" direction="up"/>
				<Thumb handleClick={this._handleDown.bind(this)} active={this.state.down} ref="down" direction="down"/>
			</div>
		)
	}

	_handleUp () {
		var up = this.state.up ?
			false :
			true
		this.setState({
			up:up,
			down:false
		})
	}

	_handleDown () {
		var down = this.state.down ?
			false :
			true
		this.setState({
			up:false,
			down:down
		})
	}

}

export default Radium(VotingButtons)
