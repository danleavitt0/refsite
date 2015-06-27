import React from 'react'
import Radium from 'radium'

class Title extends React.Component {

	getStyles () {
		var styles = {
			base: {
				display:'flex',
				fontSize: 60,
				color:'#fff',
				margin:0,
				fontWeight:400,
				flex: 1,
				alignItems: 'center',
				fontFamily:'Roboto, sans-serif'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<h2
				style={[
					styles.base,
					this.props.style
			]}>
					{this.props.label}
			</h2>
		)
	}

}

Title.defaultProps = {
	label: ''
}

export default Radium(Title)
