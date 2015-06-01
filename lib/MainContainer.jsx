var React = require('react'),
		mui = require('material-ui'),
		FeatureCarousel = require('./FeatureCarousel.jsx'),
		Matches = require('./Matches.jsx')

var innerMainContainerStyles = {
	overflow:'hidden'
}

var MainContainer = React.createClass({
	render: function() {
		return (
			<div style={innerMainContainerStyles} className="inner-main-container">
				<FeatureCarousel />
				<Matches />
			</div>
		)
	}
})

module.exports = MainContainer