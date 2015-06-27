import React from 'react'
import Radium from 'radium'
import moment from 'moment'
import {Link} from 'react-router'
import _ from 'lodash'
import Card from './Card'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import Team from './Team'
import Title from './Title'
import Teams from 'Teams.json'

class MatchResults extends React.Component {

  getStyles () {
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
  }

  filterResults (list) {
    var results = _.filter(list, function(el,idx){
      return el.teams.toLowerCase().indexOf(this.props.query) > -1;
    }.bind(this))
    return results
  }

  render () {
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
    }, this)
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

}

export default Radium(MatchResults)
