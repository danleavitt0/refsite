var React = require('react'),
		mui = require('material-ui'),
		ImageDarken = require('./ImageDarken'),
		Title = require('./Title.jsx'),
		Radium = require('radium')

var CarouselItem = React.createClass(Radium.wrap({

	getInitialState: function() {
		return {
			windowWidth: window.innerWidth
		}
	},

	getDefaultProps: function() {
		return {
			active:false
		}
	},

	componentDidMount: function() {
		window.addEventListener('resize', this._handleResize)
	},

	componentWillUnmount: function() {
		window.removeEventListener('resize', this._handleResize)
	},

	render: function() {
		var fontSize = this.state.windowWidth / 20 + 10
		return (
			<div
				style={[
					styles.div,
					this.props.style,
					this.props.active && styles.active
				]}
			>
				<ImageDarken />
				<div className="info" style={styles.info}>
					<Title style={{fontSize:(fontSize - fontSize/12)}} label={this.props.match.info.home +  ' v ' + this.props.match.info.away}/>
					<Title style={{fontSize:fontSize, fontWeight:800}} label={this.props.match.info.score} />
					<Title style={{fontSize:(fontSize - fontSize/10), flex:3, fontWeight:100}} label={'Referee: '+this.props.match.referee} />
				</div>
			</div>
		)
	},

	_handleResize: function () {
		this.setState({
			windowWidth: window.innerWidth
		})
	}

}))

var styles = {
	div: {
		opacity:0,
		height: '100%',
		width: '100%',
		left: '100vw',
		position: 'absolute',
		transition: 'all .5s ease-in-out',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage: 'url(http://afctv.net/king-include/uploads/thomas-vermaelen-of-arsenal-tackles-fernando-torres-of-chelsea-during-the-barclays-premier-league-1087872023.jpg)',
		boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)"
	},
	info: {
		color: '#fff',
	  position: 'relative',
	  margin: '0 auto',
	  top: '10%',
	  width:'80%',
	  fontSize: '60px',
	  fontFamily: 'Roboto,sans-serif',
	  textShadow: '1px 1px rgba(0,0,0,0.8)',
	  height: '80%',
	  display: 'flex',
	  flexDirection: 'column'
	},
	active:{
		opacity:1,
		left:'0'
	}
}

module.exports = CarouselItem
