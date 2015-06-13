var React = require('react'),
    Radium = require('radium'),
    Card = require('./Card.jsx'),
    CardTitle = require('./CardTitle'),
    Title = require('./Title')

var TeamResults = React.createClass(Radium.wrap({

  getStyles: function () {
    var styles = {
      base:{
        width:'80%',
        padding:'20px 0'
      },
      results:{
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'center'
      },
      card:{
        margin:'15px'
      },
      cardTitle:{
        padding:'0 10px',
        alignItems:'center'
      },
      title:{
        fontSize:22,
        color:'#333'
      }
    }
    return styles
  },

  filterResults: function(list) {
    var results = _.filter(list, function(el,idx){
      return el.name.toLowerCase().indexOf(this.props.query) > -1;
    }.bind(this))
    return results
  },

  render: function () {
    var styles = this.getStyles()
    var items = _.map(this.filterResults(this.props.list), function(el){
      return (
        <Card style={[
            styles.card
        ]}>
          <CardTitle content={el.name} style={[
              styles.cardTitle,
              {backgroundColor: el.color}
          ]}>
          </CardTitle>
        </Card>
      )
    })
    return (
      <div>
        <Title style={[styles.title]} label={"teams"} />
        <div style={[
          styles.results
        ]}>
          {items}
        </div>
      </div>
    )
  }

}))

module.exports = TeamResults
