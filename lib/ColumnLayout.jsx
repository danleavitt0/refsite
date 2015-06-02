var React = require('react'),
    Card = require('./Card.jsx'),
    _ = require('lodash'),
    Radium = require('radium')

var numColumns = 1

function getColumnNumber (colWidth) {
  var cols
  var width = window.innerWidth

  if (width < colWidth*2 + 100) {
    cols = 1
  }
  else if (width < colWidth*3 + 100) {
    cols = 2
  }
  else if (width < colWidth*5 + 100)
    cols = 3
  else
    cols = 4

  return { numColumns: cols }

}

var ColumnLayout = React.createClass(Radium.wrap({

  getDefaultProps: function() {
    return {
      width: 350
    }
  },

  getInitialState: function() {
    return getColumnNumber(this.props.width)
  },

  getCards: function(col) {
    var cards = _.takeRight(this.props.cards, 10)
    return _.filter(cards, function(card, i){
      return i % this.state.numColumns ===  col
    },this)
  },

  handleResize: function(e) {
    this.setState(getColumnNumber(this.props.width))
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
        <div key={i} className={"column-"+i} style= {[
          styles.column, 
          this.props.style,
          this.props.width && {width: this.props.width}
        ]} >
          {this.getCards(i)}
        </div>
      )
    }
   
    return (
      <div style={styles.container} className="md-grid-container">
        {cols}
      </div>
    )

  }
}))

var styles = {
  column:{
    width:350,
    maxWidth:'100%',
    margin:10,
    display:'inline-block',
    verticalAlign: 'top',
    '@media (max-width: 500px)': {
      margin:0
    }
  },
  container:{
    display:'table',
    margin:'0 auto'
  }
}

module.exports = ColumnLayout