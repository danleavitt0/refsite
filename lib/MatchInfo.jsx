var React = require('react'),
		Radium = require('radium'),
		MatchHeading = require('./MatchHeading.jsx'),
		Firebase = require('firebase')

var MatchInfo = React.createClass(Radium.wrap({
	componentDidMount: function() {
		var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/'+this.props.params.matchId)
		fireBaseRef.on('value', function(snapshot){
			this.setState({
				match:snapshot.val()
			})
		}.bind(this))
	},
	render: function () {
		if(this.state.match)
			return (
				<div style={[styles.div]}>
					<MatchHeading key={0} content={this.state.match} style={[]} />
					<div />
				</div>
			)
		else return null
	}
}))

var styles={
	div:{
		minHeight:'100vh',
		backgroundColor:'#f5f5f5'
	}
}


module.exports = MatchInfo
