import React from 'react'
import Radium from 'radium'
import moment from 'moment'
import ColumnLayout from './ColumnLayout'
import Card from './Card'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import Team from './Team'
import MatchStore from 'lib/stores/MatchStore'
import Teams from 'Teams.json'
import VotingButtons from './VotingButtons'
import {IconButton} from 'material-ui'
import {Link} from 'react-router'
import _ from 'lodash'

function getMatchContent(match, i) {
	return (
		<Card key={i}>
			<Link style={styles.link} to={"/match/"+match.id}>
				<CardTitle content={match.referee} style={{backgroundColor:Teams[match.info.home].color}}>
					<VotingButtons />
				</CardTitle>
				<CardContent>
					<p> {moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a')} </p>
					<div>
						<Team team={match.info.home} score={match.info.score[0]} />
						<Team team={match.info.away} score={match.info.score[2]} />
					</div>
				</CardContent>
			</Link>
		</Card>
	)
}

var Matches = React.createClass({
	getInitialState: function() {
		return {
			matches:MatchStore.get()
		}
	},
	componentDidMount: function() {
		MatchStore.addChangeListener(this._getMatches)
	},
	componentWillUnmount: function() {
		MatchStore.removeChangeListener(this._getMatches)
	},
	render: function () {
		var matches = this.state.matches.map(getMatchContent)
		return (
			<div style={[
				styles.matchSection,
				this.props.style
			]}>
				<ColumnLayout cards={matches}/>
			</div>
		)
	},
	_getMatches: function() {
		this.setState({
			matches:MatchStore.get()
		})
	}
})

var styles = {
	matchSection: {
		backgroundColor:'#e5e5e5'
	},
	link: {
		color:'rgba(0,0,0,0.87)',
		textDecoration:'none'
	}
}

export default Radium(Matches)
