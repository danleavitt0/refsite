import React from 'react'
import Teams from 'Teams.json'
import Radium from 'radium'

class Team extends React.Component {

	getStyles () {
		var styles = {
			div: {
				display:"flex",
				alignItems:"center",
				justifyContent:"space-between",
				flex:"1"
			},
			img: {
				display:"inline-block",
				height:50,
				width:50,
				margin:"5px",
				minWidth:50
			},
			title: {
				display:"inline-block",
				margin:"5px",
				fontSize:22,
				fontWeight:"100",
				textAlign:"center"
			},
			score: {
				display:"inline-block",
				margin:"5px",
				fontSize:40
			},
			team: {
				display: "flex",
			  alignItems: "center",
			  justifyContent: "flex-start"
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={styles.div}>
				<div style={styles.team}>
					<img style={styles.img} src={Teams[this.props.team]['logo-url']} />
					<h3 style={styles.title}> {Teams[this.props.team].name} </h3>
				</div>
				<h2 style={styles.score}> {this.props.score} </h2>
			</div>
		)
	}

}

export default Radium(Team)
