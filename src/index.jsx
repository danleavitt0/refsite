var React = require('react'),
		Radium = require('radium'),
		ThemeManager = require('material-ui/lib/styles/theme-manager')(),
		Header = require('../lib/Header.jsx'),
		MainContainer = require('../lib/MainContainer.jsx'),
		ProfileActions = require('../lib/actions/ProfileActions'),
		ProfileStore = require('../lib/stores/ProfileStore'),
		Match = require('../lib/Match.jsx'),
		MatchNotFound = require('../lib/MatchNotFound.jsx'),
		MatchInfo = require('../lib/MatchInfo.jsx'),
		Router = require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Link = Router.Link,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		NotFoundRoute = Router.NotFoundRoute,
		ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		$ = require('jquery')

var App = React.createClass(Radium.wrap({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  contextTypes: {
  	router: React.PropTypes.func.isRequired
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
		var name = this.context.router.getCurrentPath()
		var extract = name.match(/\/(.*)\//g);
		name = extract ? extract.pop().replace(/\//ig,'') : 'home'
		return (
			<div className="app" style={[
				styles.container
			]}>
				<Header profile={this.state.profile} />
				<ReactCSSTransitionGroup container="div" transitionName={name}>
					<RouteHandler key={name}/>
				</ReactCSSTransitionGroup>
			</div>
		)
	},

	_onchange: function() {
		this.setState({
			profile: ProfileStore.getProfile()
		})
	}

}))

var styles = {
	container: {
		top:64,
		position:'absolute',
		left:0,
		right:0
	}
}

var routes = (
	<Route name="app" path="/" handler={App} >
		<Route name="match" path="/match" handler={Match} >
			<NotFoundRoute handler={MatchNotFound} />
			<Route name="matchInfo" path="/match/:matchId" handler={MatchInfo} />
		</Route>
		<DefaultRoute name="main" handler={MainContainer} />
	</Route>
)


$(document).ready(function(){
	Router.run(routes, Router.HistoryLocation, function(Handler){
		React.render(<Handler/>, document.body)
	})
})
