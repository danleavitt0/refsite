var React = require('react'),
		ThemeManager = require('material-ui/lib/styles/theme-manager')(),
		Header = require('../lib/Header.jsx'),
		MainContainer = require('../lib/MainContainer.jsx'),
		ProfileActions = require('../lib/actions/ProfileActions'),
		ProfileStore = require('../lib/stores/ProfileStore'),
		$ = require('jquery')

var App = React.createClass({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  getInitialState: function() {
  	return {
  		profile: ProfileActions.checkForLogin() 
  	}
  },

  componentDidMount: function() {
  	ProfileStore.addChangeListener(this._onchange)
  },

  componentWillUnmount: function() {
  	ProfileStore.removeChangeListener(this._onchange)
  },

	render: function() {
		return (
			<div className="app">
				<Header profile={this.state.profile} />
				<MainContainer />
			</div>
		)
	},

	_onchange: function() {
		this.setState({
			profile: ProfileStore.getProfile()
		})
	}

})


$(document).ready(function(){
	React.render(<App />, document.getElementById('container'))
})
