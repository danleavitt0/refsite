var React = require('react'),
    Radium = require('radium'),
    Teams = require('./utils/Teams.json'),
    MatchStore = require('./stores/MatchStore'),
    RefereeStore = require('./stores/RefereeStore'),
    TeamResults = require('./TeamResults'),
    MatchResults = require('./MatchResults'),
    _ = require('lodash')

var Search = React.createClass(Radium.wrap({

  componentWillReceiveProps: function() {
    this.setState({
      teams: Teams,
      matches: MatchStore.get(),
      referees: RefereeStore.get()
    })
  },

  getStyles: function () {
    var styles = {
      base: {
        minHeight:window.innerHeight - 64,
        backgroundColor:'#f5f5f5'
      }
    }
    return styles
  },

  render: function () {
    var styles = this.getStyles()
    return (
      <div style={[
        styles.base,
        this.props.style
      ]}>
        <TeamResults list={this.state.teams} query={this.props.query.sr.toLowerCase()}/>
        <MatchResults list={this.state.matches} query={this.props.query.sr.toLowerCase()}/>
      </div>
    )
  }

}))

module.exports = Search
