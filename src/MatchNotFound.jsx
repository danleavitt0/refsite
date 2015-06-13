var React = require('react'),
		Radium = require('radium')

var MatchNotFound = React.createClass(Radium.wrap({
	render: function () {
		return (
			<div> Match is not found </div>
		)
	}
}))

module.exports = MatchNotFound