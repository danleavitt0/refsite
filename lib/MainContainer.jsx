var React = require('react'),
		mui = require('material-ui'),
		FeatureCarousel = require('./FeatureCarousel.jsx'),
		Matches = require('./Matches.jsx'),
		Radium = require('radium')

var MainContainer = React.createClass(Radium.wrap({
	render: function() {
		return (
			<div style={[
				styles.base,
				this.props.style
			]}>
				<FeatureCarousel />
				<Matches />
			</div>
		)
	}
}))

var styles = {
	base: {
		overflow:'hidden'
	}
}

module.exports = MainContainer