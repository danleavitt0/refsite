'use strict';

var React = require('react'),
    Radium = require('radium'),
    Card = require('lib/components/Card'),
    CardTitle = require('lib/components/CardTitle'),
    moment = require('moment'),
    Title = require('lib/components/Title');

var MatchResults = React.createClass(Radium.wrap({

  getStyles: function getStyles() {
    var styles = {
      card: {
        width: 350,
        margin: 15,
        display: 'inline-block'
      },
      link: {
        textDecoration: 'none',
        color: 'inherit'
      },
      results: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        height: 275
      },
      title: {
        fontSize: 24,
        color: '#333',
        padding: '0 20px 10px 20px'
      }
    };
    return styles;
  },

  filterResults: function filterResults(list) {
    var results = _.filter(list, (function (el, idx) {
      return el.teams.toLowerCase().indexOf(this.props.query) > -1;
    }).bind(this));
    return results;
  },

  render: function render() {
    var styles = this.getStyles();
    var items = _.map(this.filterResults(this.props.list), function (match, i) {
      return React.createElement(
        Card,
        { style: [styles.card], key: i },
        React.createElement(
          Link,
          { style: styles.link, to: '/match/' + match.id },
          React.createElement(CardTitle, { content: match.referee, style: { backgroundColor: Teams[match.info.home].color } }),
          React.createElement(
            CardContent,
            null,
            React.createElement(
              'p',
              null,
              ' ',
              moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a'),
              ' '
            ),
            React.createElement(
              'div',
              null,
              React.createElement(Team, { team: match.info.home, score: match.info.score[0] }),
              React.createElement(Team, { team: match.info.away, score: match.info.score[2] })
            )
          )
        )
      );
    });
    return React.createElement(
      'div',
      { style: [this.props.style] },
      React.createElement(Title, { style: [styles.title], label: 'Matches' }),
      React.createElement(
        'div',
        { style: [styles.results] },
        items
      )
    );
  }

}));

module.exports = MatchResults;