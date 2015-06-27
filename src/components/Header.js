import React from 'react'
import Radium from 'radium'
import Login from './Login'
import SearchBar from './SearchBar'
import {Link} from 'react-router'
import _ from 'lodash'

class Header extends React.Component {

	getStyles () {
		var theme = this.context.muiTheme
		var styles = {
			header:{
				position:'fixed',
				height:64,
				left:0,
				right:0,
				top:0,
				zIndex:1,
				backgroundColor:theme.palette.primary1Color,
				boxShadow:'0 2px 5px rgba(0,0,0,0.3)',
				display:'flex',
				alignItems:'center',
				padding:'0 40px'
			},
			link:{
				fontSize:'26px',
				color:'#fff',
				fontFamily:theme.contentFontFamily,
				textDecoration:'none',
				fontSmoothing:'antialiased',
				flex:1
			}
		}
		return styles
	}

	mergeStyles (styleArray) {
		var styles = {}
		_.forEach(styleArray, function (styleObj) {
			styles = _.merge(styles, styleObj)
		})
		return styles
	}

	render () {
		var styles = this.getStyles()
		return (
			<div style={[
				styles.header,
				this.props.style
			]}>
				<Link to={"/"} style={[styles.link]}>{this.props.title}</Link>
				<SearchBar />
				<div style={{flex:1}}/>
			</div>
		)
	}

}

Header.contextTypes = {
	muiTheme: React.PropTypes.object
}

Header.defaultProps = {
	title: "Title"
}

export default Radium(Header)
