import React from 'react'
import Radium from 'radium'
import {IconButton} from 'material-ui'

class Thumb extends React.Component {

	getStyles () {
		var styles = {
			base:{
				color:'#fff',
				transition:'all .3s cubic-bezier(0.4,0,0.2,1)'
			},
			active:{
				color:'#00BCD4'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		var theme = this.context.muiTheme
		var icon = 'thumb_'+this.props.direction
		return (
			<IconButton onClick={this._handleClick.bind(this)} touchRippleColor={theme.palette.primary1Color}>
				<i className="material-icons"
					style={[
						styles.base,
						this.props.style,
						this.props.active && styles.active
				]} >
					{icon}
				</i>
			</IconButton>
		)
	}

	_handleClick (e) {
		e.preventDefault()
		e.stopPropagation()
		this.props.handleClick()
	}

}

Thumb.contextTypes = {
	muiTheme: React.PropTypes.object
}

export default Radium(Thumb)
