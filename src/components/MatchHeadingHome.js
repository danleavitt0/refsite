import React from 'react'
import Radium from 'radium'
import Teams from 'Teams.json'

class MatchHeadingHome extends React.Component {

	getStyles () {
		var styles = {
			div: {
				display:'flex',
				justifyContent:'center',
				alignItems:'center',
				flexDirection:'column',
				flex:1
			},
			img: {
				height:120,
				width:120
			},
			title:{
				fontFamily:'Roboto, sans-serif',
				fontWeight:800,
				margin:0,
				textShadow:'1px 1px rgba(0,0,0,0.2)',
				fontSize:40,
				fontSmoothing:'antialiased'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[styles.div, this.props.style]}>
				<img style={[styles.img]} src={Teams[this.props.content]['logo-url']} />
				<h3 style={[styles.title]}> {Teams[this.props.content].name} </h3>
			</div>
		)
	}

}

export default Radium(MatchHeadingHome)
