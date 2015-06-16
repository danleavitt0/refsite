var React = require('react'),
    Radium = require('radium'),
    Card = require('lib/components/Card'),
    CardTitle = require('lib/components/CardTitle'),
    Title = require('lib/components/Title')

var TeamResults = React.createClass(Radium.wrap({

  getStyles: function () {
    var styles = {
      base:{
        width:'80%',
        padding:'20px 0'
      },
      results:{
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
      },
      card:{
        margin:'15px',
        display:'inline-block'
      },
      cardTitle:{
        padding:'0 10px',
        alignItems:'center'
      },
      title:{
        fontSize:24,
        color:'#333',
        padding: '0 20px 10px 20px'
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
      <div style={[this.props.style]}>
        <Title style={[styles.title]} label="Teams" />
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
