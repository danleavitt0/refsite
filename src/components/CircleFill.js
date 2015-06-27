import React from 'react'
import Radium from 'radium'

class CircleFill extends React.Component {

	getStyles () {
		var styles = {
			circle:{
				height:'15px',
				width:'15px',
				borderRadius:'50%',
				opacity:0,
				transition: 'all .3s ease-in',
				backgroundColor:'#00BCD4'
			},
			hover: {
				opacity:0.4
			},
			active: {
				opacity:1
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
 		return (
			<div style={[
				styles.circle,
				this.props.hover && styles.hover,
				this.props.active && styles.active
			]} />
		)
	}

}

export default Radium(CircleFill)