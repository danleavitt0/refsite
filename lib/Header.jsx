var React = require('react'),
		mui = require('material-ui'),
		Login = require('./Login.jsx'),
		AppBar = mui.AppBar


var Header = React.createClass({
	render: function() {
		this.login = <Login profile={this.props.profile} />
		return (
			<AppBar title="Awesome" iconElementRight={this.login} />
		)
	}
})

module.exports = Header