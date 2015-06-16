'use strict';

var React = require('react'),
    Radium = require('radium'),
    Card = require('lib/components/Card'),
    CardTitle = require('lib/components/CardTitle'),
    Title = require('lib/components/Title');

var TeamResults = React.createClass(Radium.wrap({

  getStyles: function getStyles() {
    var styles = {
      base: {
        width: '80%',
        padding: '20px 0'
      },
      results: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
      },
      card: {
        margin: '15px',
        display: 'inline-block'
      },
      cardTitle: {
        padding: '0 10px',
        alignItems: 'center'
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
      return el.name.toLowerCase().indexOf(this.props.query) > -1;
    }).bind(this));
    return results;
  },

  render: function render() {
    var styles = this.getStyles();
    var items = _.map(this.filterResults(this.props.list), function (el) {
      return React.createElement(
        Card,
        { style: [styles.card] },
        React.createElement(CardTitle, { content: el.name, style: [styles.cardTitle, { backgroundColor: el.color }] })
      );
    });
    return React.createElement(
      'div',
      { style: [this.props.style] },
      React.createElement(Title, { style: [styles.title], label: 'Teams' }),
      React.createElement(
        'div',
        { style: [styles.results] },
        items
      )
    );
  }

}));

module.exports = TeamResults;