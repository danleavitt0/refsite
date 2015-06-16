'use strict';

var React = require('react'),
    mui = require('material-ui'),
    CarouselItem = require('lib/components/CarouselItem'),
    Navigation = require('lib/components/Navigation'),
    CarouselStore = require('lib/stores/CarouselStore'),
    MatchStore = require('lib/stores/MatchStore'),
    Radium = require('radium'),
    _ = require('lodash');

var FeatureCarousel = React.createClass(Radium.wrap({
	getDefaultProps: function getDefaultProps() {
		return {
			navigation: true
		};
	},
	getInitialState: function getInitialState() {
		this.getStateFromStore();
	},
	getStateFromStore: function getStateFromStore() {
		return {
			matches: MatchStore.get(),
			active: CarouselStore.get()
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setState(this.getStateFromStore());
	},
	componentDidMount: function componentDidMount() {
		this.setState(this.getStateFromStore());
		CarouselStore.addChangeListener(this._handleChange);
		MatchStore.addChangeListener(this._handleMatches);
	},
	componentWillUnmount: function componentWillUnmount() {
		CarouselStore.removeChangeListener(this._handleChange);
		MatchStore.removeChangeListener(this._handleMatches);
	},
	render: function render() {
		carouselItems = [];
		var navigation = this.props.navigation ? React.createElement(Navigation, { active: this.state.active }) : null;
		if (this.state.matches && this.state.matches.length > 0) {
			for (var i = 0; i < 3; i++) {
				active = this.state.active === i ? true : false;
				carouselItems.push(React.createElement(CarouselItem, { key: i, active: active, position: i, match: this.state.matches[i] }));
			}
		}
		return React.createElement(
			'div',
			{ style: [styles.base, this.props.style] },
			carouselItems,
			navigation
		);
	},
	_handleChange: function _handleChange() {
		this.setState({
			active: CarouselStore.get()
		});
	},
	_handleMatches: function _handleMatches() {
		this.setState({
			matches: MatchStore.get()
		});
	}
}));

var styles = {
	base: {
		display: 'flex',
		width: '100%',
		height: '60vh',
		minHeight: 400,
		position: 'relative'
	}
};

module.exports = FeatureCarousel;