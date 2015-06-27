import React from 'react'
import Radium from 'radium'

class CardContent extends React.Component {

	getStyles () {
		var styles = {
			content: {
				padding: 10
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[
				styles.content,
				this.props.style
			]} >
				{this.props.children}
			</div>
		)
	}

}

export default Radium(CardContent)
