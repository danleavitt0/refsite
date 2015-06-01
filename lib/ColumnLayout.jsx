var React = require('react'),
    Card = require('./Card.jsx')
    _ = require('lodash')


var numColumns = 1

var columnStyle = {
  width:350,
  maxWidth:'100%',
  margin:10,
  display:'inline-block',
  verticalAlign: 'top'
}

var containerStyle = {
  display:'table',
  margin:'0 auto'
}

function getColumnNumber () {
  var cols
  var width = window.innerWidth

  if (width < 500) {
    cols = 1
    columnStyle.margin = 0
  }
  else if (width < 1000) {
    cols = 2
    columnStyle.margin = 10
  }
  else if (width < 1500)
    cols = 3
  else
    cols = 4

  return { numColumns: cols }

}

var ColumnLayout = React.createClass({

  getInitialState: function() {
    return getColumnNumber()
  },

  getCards: function(col) {
    var cards = _.takeRight(this.props.cards, 10)
    console.log(cards)
    return _.filter(cards, function(card, i){
      return i % this.state.numColumns ===  col
    },this)
  },

  handleResize: function(e) {
    this.setState(getColumnNumber())
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize)
  },

  render: function() {

    var cols = []

    for (var i = 0; i < this.state.numColumns; i++){
      cols.push(
        <div key={i} className={"column-"+i} style={columnStyle}>
          {this.getCards(i)}
        </div>
      )
    }
   
    return (
      <div style={containerStyle} className="md-grid-container">
        {cols}
      </div>
    )

  }
})

module.exports = ColumnLayout