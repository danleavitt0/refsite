var React = require('react'),
		mui = require('material-ui'),
		FeatureCarousel = require('lib/components/FeatureCarousel'),
		Matches = require('lib/components/Matches'),
		Radium = require('radium')

var MainContainer = React.createClass(Radium.wrap({
	render: function() {
		return (
			<div key={0} style={[
				styles.base,
				this.props.style
			]}>
				<FeatureCarousel key={1}/>
				<Matches key={2}/>
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
