import React from 'react'
import Radium from 'radium'

class CardTitle extends React.Component {

	getStyles () {
		var styles = {
			content: {
				backgroundColor:'tomato',
				height:60,
				width:'100%',
				lineHeight:'54px',
				color:'#fff',
				padding:'5px 12px 5px 20px',
				boxSizing:'border-box',
				fontSize:22,
				fontFamily:'Roboto, sans-serif',
				opacity:0.8,
				display:'flex'
			},
			title:{
				flex:1,
				padding:'0 5px'
			},
			icons:{
				lineHeight:'36px',
				position:'relative',
				top:'2px'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div key={1} style={[
				styles.content,
				this.props.style
			]} >
				<div style={[styles.title]}> {this.props.content} </div>
				<div style={[styles.icons]}> {this.props.children} </div>
			</div>
		)
	}

}

export default Radium(CardTitle)