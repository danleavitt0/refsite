var React = require('react'),
		mui = require('material-ui'),
		CarouselItem = require('./CarouselItem'),
		Navigation = require('./Navigation'),
		CarouselStore = require('./stores/CarouselStore'),
		MatchStore = require('./stores/MatchStore'),
		Radium = require('radium')
		_ = require('lodash')

var FeatureCarousel = React.createClass(Radium.wrap({
	getDefaultProps: function() {
		return {
			navigation:true
		}
	},
	getInitialState: function() {
		this.getStateFromStore()
	},
	getStateFromStore: function () {
		return {
			matches: MatchStore.get(),
			active: CarouselStore.get()
		}
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState(this.getStateFromStore())
	},
	componentDidMount: function() {
		this.setState(this.getStateFromStore())
		CarouselStore.addChangeListener(this._handleChange)
		MatchStore.addChangeListener(this._handleMatches)
	},
	componentWillUnmount: function() {
		CarouselStore.removeChangeListener(this._handleChange)
		MatchStore.removeChangeListener(this._handleMatches)
	},
	render: function () {
		carouselItems = []
		var navigation = this.props.navigation ?
			<Navigation active={this.state.active}/> :
			null
		if(this.state.matches && this.state.matches.length > 0) {
			for (var i = 0; i < 3; i++) {
				active = this.state.active === i ? true : false
				carouselItems.push(<CarouselItem key={i} active={active} position={i} match={this.state.matches[i]} />)
			}
		}
		return (
			<div style={[
				styles.base,
				this.props.style
			]} >
				{carouselItems}
				{navigation}
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
