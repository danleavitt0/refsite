import React from 'react'
import Radium from 'radium'
import Teams from 'Teams.json'

class ScoreBox extends React.Component {

	getStyles () {
		var styles = {
			div: {
				display:'flex',
				flex:1,
				alignItems:'center',
				justifyContent:'center',
				height:'100%'
			},
			score: {
				display:'flex',
				fontSize:'5em',
				fontWeight:700,
				fontSmoothing:'antialiased',
				flex:1,
				height:'100%',
				alignItems:'center',
				justifyContent:'center',
				boxShadow:'inset 0 2px 5px rgba(0,0,0,0.3)',
				opacity:0.9
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[styles.div]}>
				<div style={[
					styles.score,
					{backgroundColor:Teams[this.props.home].color}
				]}>
					{this.props.content[0]}
				</div>
				<div style={[
					styles.score,
					{backgroundColor:Teams[this.props.away].color}
				]}>
					{this.props.content[2]}
				</div>
			</div>
		)
	}

}

export default Radium(ScoreBox)
