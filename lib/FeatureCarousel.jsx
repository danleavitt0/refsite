var React = require('react'),
		mui = require('material-ui'),
		CarouselItem = require('./CarouselItem.jsx'),
		Navigation = require('./Navigation.jsx'),
		CarouselStore = require('./stores/CarouselStore'),
		MatchStore = require('./stores/MatchStore'),
		Radium = require('radium')
		_ = require('lodash')

var FeatureCarousel = React.createClass(Radium.wrap({
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
			<div style={[
				styles.base,
				this.props.style
			]} >
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
}))

var styles = {
	base:{
		display:'flex',
		width:'100%',
		height:'60vh',
		minHeight:400,
		position:'relative'
	}
}

module.exports = FeatureCarousel