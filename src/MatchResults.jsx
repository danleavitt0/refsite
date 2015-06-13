var React = require('react'),
    Radium = require('radium'),
    Card = require('./Card.jsx'),
    CardTitle = require('./CardTitle'),
    moment = require('moment')

var MatchResults = React.createClass(Radium.wrap({

  getStyles: function () {
    var styles = {
      card: {
        width:350,
        margin:15
      },
      link: {
        textDecoration:'none',
        color:'inherit'
      },
      results:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
      }
    }
    return styles
  },

  filterResults: function(list) {
    var results = _.filter(list, function(el,idx){
      return el.teams.toLowerCase().indexOf(this.props.query) > -1;
    }.bind(this))
    return results
  },

  render: function () {
    var styles = this.getStyles()
    var items = _.map(this.filterResults(this.props.list), function(match, i){
      return (
        <Card style={[styles.card]} key={i}>
    			<Link style={styles.link} to={"/match/"+match.id}>
    				<CardTitle content={match.referee} style={{backgroundColor:Teams[match.info.home].color}}>
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
    })
    return (
      <div>
        <h2> Matches </h2>
        <div style={[
          styles.results
        ]}>
          {items}
        </div>
      </div>
    )
  }

}))

module.exports = MatchResults
