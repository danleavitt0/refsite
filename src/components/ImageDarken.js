import React from 'react'
import Radium from 'radium'

class ImageDarken extends React.Component {

	getStyles () {
		var styles = {
			base:{
				position:'absolute',
				width:'100%',
				height:'100%',
				backgroundColor: 'rgba(0,0,0,0.3)',
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[
				styles.base,
				this.props.style,
				this.props.darken && {backgroundColor: 'rgba(0,0,0,'+this.props.darken+')'}
			]} />
		)
	}

}

export default Radium(ImageDarken)
