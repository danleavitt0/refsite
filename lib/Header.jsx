var React = require('react'),
		mui = require('material-ui'),
		AppBar = mui.AppBar

var Header = React.createClass({
	render: function() {
		return (
			<AppBar title="Awesome" />
		)
	}
})

module.exports = Header