import React from 'react'
import Radium from 'radium'
import Teams from 'Teams.json'
import MatchStore from 'lib/stores/MatchStore'
import RefereeStore from 'lib/stores/RefereeStore'
import {TeamResults, MatchResults} from 'lib/components'
import _ from 'lodash'

class Search extends React.Component {

  componentWillReceiveProps () {
    this.setState({
      teams: Teams,
      matches: MatchStore.get(),
      referees: RefereeStore.get()
    })
  }

  componentDidMount () {
    this.setState({
      teams: Teams,
      matches: MatchStore.get(),
      referees: RefereeStore.get()
    })
  }

  getStyles () {
    var styles = {
      base: {
        minHeight:window.innerHeight - 64,
        backgroundColor:'#e5e5e5'
      },
      content: {
        width:'80%',
        margin:'0 auto',
        padding:'30px'
      }
    }
    return styles
  }

  render () {
    var styles = this.getStyles()
    if(!this.props.query)
      return null
    else return (
      <div style={[
        styles.base,
        this.props.style
      ]}>
        <div>
          <TeamResults style={[styles.content]} list={this.state.teams} query={this.props.query.sr.toLowerCase()}/>
          <MatchResults style={[styles.content]} list={this.state.matches} query={this.props.query.sr.toLowerCase()}/>
        </div>
      </div>
    )
  }

}

export default Radium(Search)
