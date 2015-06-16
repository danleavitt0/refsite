var React = require('react'),
		Radium = require('radium'),
		ThumbUp = require('lib/components/ThumbUp'),
		ThumbDown = require('lib/components/ThumbDown')

var VotingButtons = React.createClass(Radium.wrap({
	getInitialState: function() {
		return {
			up:false,
			down:false
		}
	},
	render: function () {
		return (
			<div>
				<ThumbUp handleClick={this._handleUp} active={this.state.up} ref="up" />
				<ThumbDown handleClick={this._handleDown} active={this.state.down} ref="down" />
			</div>
		)
	},
	_handleUp: function () {
		var up = this.state.up ?
			false :
			true
		this.setState({
			up:up,
			down:false
		})
	},
	_handleDown: function () {
		var down = this.state.down ?
			false :
			true
		this.setState({
			up:false,
			down:down
		})
	}
}))

module.exports = VotingButtons
