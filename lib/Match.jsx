var React = require('react'),
		Radium = require('radium'),
		Router = require('react-router'),
		RouteHandler = Router.RouteHandler

var Match = React.createClass(Radium.wrap({
	render: function () {
		return (
			<div> 
				<RouteHandler/>
			</div>
		)
	}
}))

module.exports = Match