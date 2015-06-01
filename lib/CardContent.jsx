var React = require('react')

var cardContentStyle={
	padding:10
}

var CardContent = React.createClass({
	render: function() {
		return (
			<div style={cardContentStyle} className="md-card-content">
				{this.props.content}
			</div>
		)
	}
})

module.exports = CardContent