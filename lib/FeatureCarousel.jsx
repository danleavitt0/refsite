var React = require('react'),
		mui = require('material-ui'),
		CarouselItem = require('./CarouselItem.jsx'),
		Navigation = require('./Navigation.jsx'),
		CarouselStore = require('./stores/CarouselStore'),
		MatchStore = require('./stores/MatchStore'),
		_ = require('lodash')

var carouselStyle = {
	display:'flex',
	width:'100%',
	height:'60vh',
	minHeight:400,
	position:'relative'
}

var FeatureCarousel = React.createClass({
	getInitialState: function() {
		return {
			active:0,
			matches:[]
		}
	},
	componentDidMount: function() {
		var matches = []
		CarouselStore.addChangeListener(this._handleChange)
		MatchStore.addChangeListener(this._handleMatches)
	},
	componentWillUnmount: function() {
		CarouselStore.removeChangeListener(this._handleChange)
		MatchStore.removeChangeListener(this._handleMatches)
	},
	render: function () {
		carouselItems = []
		if(this.state.matches.length>0) {
			for (var i = 0; i < 3; i++) {
				active = this.state.active === i ? true : false
				carouselItems.push(<CarouselItem key={i} active={active} position={i} match={_.first(this.state.matches[i])} />)
			}
		}
		return (
			<div style={carouselStyle} className="featured-games" >
				{carouselItems}
				<Navigation active={this.state.active}/>
			</div>
		)
	},
	_handleChange: function() {
		this.setState({
			active:CarouselStore.get()
		})
	},
	_handleMatches: function() {
		this.setState({
			matches:MatchStore.get()
		})
	}
})

module.exports = FeatureCarousel