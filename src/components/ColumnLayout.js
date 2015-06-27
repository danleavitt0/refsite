import React from 'react'
import Radium from 'radium'
import Card from  './Card'
import _ from 'lodash'

function getColumnNumber (colWidth) {
  var cols
  var width = window.innerWidth
  console.log(colWidth)

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

class ColumnLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      width: this.props.width,
      numColumns: 3
    }
  }

  getCards (col) {
    var cards = _.takeRight(this.props.cards, 10)
    return _.filter(cards, function(card, i){
      return i % this.state.numColumns === col
    },this)
  }

  handleResize (e) {
    this.setState(getColumnNumber(this.props.width))
  }

  componentDidMount () {

    window.addEventListener('resize', this.handleResize.bind(this))
    this.columnStyle = {
      width:this.props.width,
      maxWidth:'100%',
      margin:10,
      display:'inline-block',
      verticalAlign: 'top'
    }

  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render () {

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

}

ColumnLayout.defaultProps = {
  width: 350
}

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

export default Radium(ColumnLayout)
