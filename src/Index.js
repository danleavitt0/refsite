var React = require('react'),
    Radium = require('radium'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    Header = require('lib/components/Header'),
    MainContainer = require('lib/components/MainContainer'),
    ProfileActions = require('lib/actions/ProfileActions'),
    ProfileStore = require('lib/stores/ProfileStore'),
    Match = require('lib/components/Match'),
    MatchNotFound = require('lib/components/MatchNotFound'),
    MatchInfo = require('lib/components/MatchInfo'),
    Search = require('lib/components/Search'),
    Router = require('react-router'),
		$ = require('jquery'),
		ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

let {RouteHandler, HashHistory, Route, DefaultRoute} = Router
var Routes = require('lib/routes/Routes')

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
				<Header profile={this.state.profile} title="Backseat Ref" />
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
  <Route handler={App} path="/">
    <DefaultRoute handler={App} />
  </Route>
)

$(document).ready(function(){
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
  })
})
