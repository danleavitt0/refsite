var React = require('react'),
    Radium = require('radium'),
    Card = require('lib/components/Card'),
    CardTitle = require('lib/components/CardTitle'),
    moment = require('moment'),
    Title = require('lib/components/Title')

var MatchResults = React.createClass(Radium.wrap({

  getStyles: function () {
    var styles = {
      card: {
        width:350,
        margin:15,
        display:'inline-block'
      },
      link: {
        textDecoration:'none',
        color:'inherit'
      },
      results:{
        flexWrap:'wrap',
        justifyContent:'center',
        overflow:'hidden',
        height:275
      },
      title:{
        fontSize:24,
        color:'#333',
        padding: '0 20px 10px 20px'
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
      <div style={[this.props.style]}>
        <Title style={[styles.title]} label="Matches" />
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
