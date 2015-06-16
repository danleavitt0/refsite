'use strict';

var React = require('react'),
    mui = require('material-ui'),
    FeatureCarousel = require('lib/components/FeatureCarousel'),
    Matches = require('lib/components/Matches'),
    Radium = require('radium');

var MainContainer = React.createClass(Radium.wrap({
	render: function render() {
		return React.createElement(
			'div',
			{ key: 0, style: [styles.base, this.props.style] },
			React.createElement(FeatureCarousel, { key: 1 }),
			React.createElement(Matches, { key: 2 })
		);
	}
}));

var styles = {
	base: {
		overflow: 'hidden'
	}
};

module.exports = MainContainer;