import React from 'react'
import Radium from 'radium'
import Teams from 'Teams.json'
import MatchHeadingHome from './MatchHeadingHome'
import ScoreBox from './ScoreBox'

class MatchHeading extends React.Component {

	getStyles () {
		var styles = {
			div: {
				height:230,
				width:'100%',
				backgroundColor:'#333',
				display:'flex',
				color:'#fff',
				fontSize:30,
				alignItems:'center'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		if(this.props.content) {
			var home = this.props.content.info.home
			var away = this.props.content.info.away
			return (
				<div style={[styles.div, this.props.style]}>
					<MatchHeadingHome content={home} />
					<ScoreBox home={home} away={away} content={this.props.content.info.score} />
					<MatchHeadingHome content={away} />
				</div>
			)
		}
		else return null
	}

}

export default Radium(MatchHeading)
