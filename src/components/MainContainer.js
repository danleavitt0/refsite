import React from 'react'
import Radium from 'radium'
import FeatureCarousel from './FeatureCarousel'
import Matches from './Matches'

console.log(FeatureCarousel, Matches)

class MainContainer extends React.Component {

	getStyles () {
		var styles = {
			base: {
				overflow:'hidden'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div key={0} style={[
				styles.base,
				this.props.style
			]}>
				<FeatureCarousel />
				<Matches />
			</div>
		)
	}

}

export default Radium(MainContainer)
