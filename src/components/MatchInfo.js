import React from 'react'
import Radium from 'radium'
import MatchHeading from './MatchHeading'
import Firebase from 'firebase'

class MatchInfo extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			height: window.innerHeight
		}
	}

	componentDidMount () {
		window.addEventListener('resize', this._handleResize.bind(this))
		var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/'+this.props.params.id)
		fireBaseRef.on('value', function(snapshot){
			this.setState({
				match:snapshot.val()
			})
		}.bind(this))
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this._handleResize.bind(this))
	}

	getStyles () {
		var styles={
			div:{
				minHeight: this.state.height - 64,
				backgroundColor:'#f5f5f5'
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		if(this.state.match)
			return (
				<div style={[styles.div]}>
					<MatchHeading key={0} content={this.state.match} style={[]} />
				</div>
			)
		else return null
	}

	_handleResize () {
		this.setState({
			height: window.innerHeight
		})
	}

}


export default Radium(MatchInfo)
