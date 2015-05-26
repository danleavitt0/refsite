var React = require('react'),
		$ = require('jquery'),
		ThemeManager = require('material-ui/lib/styles/theme-manager')(),
		Header = require('../lib/Header.jsx'),
		MainContainer = require('../lib/MainContainer.jsx')

var App = React.createClass({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
    };
  },

	render: function() {
		return (
			<div className="app">
				<Header />
				<MainContainer />
			</div>
		)
	}

})


$(document).ready(function(){
	React.render(<App />, document.getElementById('container'))
})
