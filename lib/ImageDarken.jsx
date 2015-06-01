var React = require('react')

imageDarkenStyle = {
	position:'absolute',
	width:'100%',
	height:'100%',
	backgroundColor:'rgba(0,0,0,0.3)',
}

var ImageDarken = React.createClass({
	render: function () {
		return (
			<div style={imageDarkenStyle} />
		)
	}
})

module.exports = ImageDarken