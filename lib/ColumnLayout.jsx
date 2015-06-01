var React = require('react'),
    Card = require('./Card.jsx'),
    _ = require('lodash')


var numColumns = 1

var containerStyle = {
  display:'table',
  margin:'0 auto'
}

var ColumnLayout = React.createClass({

  getDefaultProps: function () {
    width:350
  },

  getInitialState: function() {
    return this.getColumnNumber()
  },
  
  getColumnNumber: function () {
    var cols
    var width = window.innerWidth
  
    if (width < 500) {
      cols = 1
      this.columnStyle.margin = 0
    }
    else if (width < 1000) {
      cols = 2
      this.columnStyle.margin = 10
    }
    else if (width < 1500)
      cols = 3
    else
      cols = 4
  
    return { numColumns: cols }
  },

  getCards: function(col) {
    var cards = _.takeRight(this.props.cards, 10)
    console.log(cards)
    return _.filter(cards, function(card, i){
      return i % this.state.numColumns ===  col
    },this)
  },

  handleResize: function(e) {
    this.setState(this.getColumnNumber())
  },

  componentDidMount: function() {
    
    window.addEventListener('resize', this.handleResize)
    this.columnStyle = {
      width:this.props.width,
      maxWidth:'100%',
      margin:10,
      display:'inline-block',
      verticalAlign: 'top'
    }
    
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize)
  },

  render: function() {

    var cols = []

    for (var i = 0; i < this.state.numColumns; i++){
      cols.push(
        <div key={i} className={"column-"+i} style={this.columnStyle}>
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