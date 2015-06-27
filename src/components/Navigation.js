import React from 'react'
import Radium from 'radium'
import CircleButton from './CircleButton'

class Navigation extends React.Component {

	getStyles () {
		var styles = {
			div: {
				display: 'flex',
				width:120,
				height:15,
				justifyContent:'space-between',
				position: 'relative',
				top:'90%',
				margin: '0 auto'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		var buttons = []
		for (var i = 0; i < 3; i++) {
			var active = this.props.active === i ? true : false
			buttons.push(<CircleButton key={i} active={active} position={i}/>)
		}
		return (
			<div style={[
				styles.div,
				this.props.style
			]}>
				{buttons}
			</div>
		)
	}

}

export default Radium(Navigation)
