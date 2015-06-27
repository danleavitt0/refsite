import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import CarouselItem from './CarouselItem'
import Navigation from './Navigation'
import CarouselStore from 'lib/stores/CarouselStore'
import MatchStore from 'lib/stores/MatchStore'

class FeatureCarousel extends React.Component {

	constructor (props) {
		super(props)
		this.state = this.getStateFromStore()
	}

	getStateFromStore () {
		return {
			matches: MatchStore.get(),
			active: CarouselStore.get()
		}
	}

	componentWillReceiveProps (nextProps) {
		this.setState(this.getStateFromStore())
	}

	componentDidMount () {
		this.setState(this.getStateFromStore())
		CarouselStore.addChangeListener(this._handleChange.bind(this))
		MatchStore.addChangeListener(this._handleMatches.bind(this))
	}

	componentWillUnmount () {
		CarouselStore.removeChangeListener(this._handleChange.bind(this))
		MatchStore.removeChangeListener(this._handleMatches.bind(this))
	}

	getStyles () {
		var styles = {
			base:{
				display:'flex',
				width:'100%',
				height:'60vh',
				minHeight:400,
				position:'relative'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		var carouselItems = []
		var navigation = this.props.navigation ?
			<Navigation active={this.state.active}/> :
			null
		if(this.state.matches && this.state.matches.length > 0) {
			for (var i = 0; i < 3; i++) {
				var active = this.state.active === i ? true : false
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
	}

	_handleChange () {
		this.setState({
			active:CarouselStore.get()
		})
	}

	_handleMatches () {
		this.setState({
			matches:MatchStore.get()
		})
	}

}

FeatureCarousel.defaultProps = {
	navigation:true
}

export default Radium(FeatureCarousel)
