import React from 'react'
import Radium from 'radium'

class Card extends React.Component {

	getStyles () {
		var styles = {
			card: {
				fontFamily:'Roboto, sans-serif',
				margin:'15px 0',
				backgroundColor:'#fff',
				boxShadow: '0 0px 2px 0 rgba(0,0,0,0.26)',
				borderRadius:2,
				transition:'box-shadow .3s cubic-bezier(0.4,0,0.2,1)',
				cursor:'pointer',
				':hover': {
					boxShadow: '0 0 3px rgba(0,0,0,.13),0 3px 6px rgba(0,0,0,.36)'
				}
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[
				styles.card,
				this.props.style
			]} >
				{this.props.children}
			</div>
		)
	}

}

module.exports = Radium(Card)
