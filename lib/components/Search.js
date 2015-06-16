'use strict';

var React = require('react'),
    Radium = require('radium'),
    Teams = require('../../../Teams.json'),
    MatchStore = require('lib/stores/MatchStore'),
    RefereeStore = require('lib/stores/RefereeStore'),
    TeamResults = require('lib/components/TeamResults'),
    MatchResults = require('lib/components/MatchResults'),
    _ = require('lodash');

var Search = React.createClass(Radium.wrap({

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setState({
      teams: Teams,
      matches: MatchStore.get(),
      referees: RefereeStore.get()
    });
  },

  componentDidMount: function componentDidMount() {
    this.setState({
      teams: Teams,
      matches: MatchStore.get(),
      referees: RefereeStore.get()
    });
  },

  getStyles: function getStyles() {
    var styles = {
      base: {
        minHeight: window.innerHeight - 64,
        backgroundColor: '#f5f5f5'
      },
      content: {
        width: '80%',
        margin: '0 auto',
        padding: '30px'
      }
    };
    return styles;
  },

  render: function render() {
    var styles = this.getStyles();
    return React.createElement(
      'div',
      { style: [styles.base, this.props.style] },
      React.createElement(
        'div',
        null,
        React.createElement(TeamResults, { style: [styles.content], list: this.state.teams, query: this.props.query.sr.toLowerCase() }),
        React.createElement(MatchResults, { style: [styles.content], list: this.state.matches, query: this.props.query.sr.toLowerCase() })
      )
    );
  }

}));

module.exports = Search;