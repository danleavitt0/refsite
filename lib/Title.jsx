var React = require('react')

var Title = React.createClass({
	getDefaultProps: function() {
		return {
			display:'flex',
			fontSize: 60,
			color:'#fff',
			margin:0,
			weight:400,
			label:'Title',
			flex: 1,
			alignItems: 'center'
		}
	},
	getStyles: function() {
		return {
			display: this.props.display,
			fontSize: this.props.fontSize,
			color: this.props.color,
			margin: this.props.margin,
			fontWeight: this.props.weight,
			flex: this.props.flex,
			alignItems: this.props.alignItems
		}
	},
	render: function () {
		this.style = this.styles || {}
		return (
			<h2 style={this.getStyles()}> {this.props.label} </h2>
		)
	}
})

module.exports = Title