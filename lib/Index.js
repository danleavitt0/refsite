'use strict';

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
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RouteHandler = Router.RouteHandler;
var HashHistory = Router.HashHistory;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Routes = require('lib/routes/Routes');

var App = React.createClass(Radium.wrap({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function getInitialState() {
    return {
      profile: ProfileActions.checkForLogin()
    };
  },

  componentDidMount: function componentDidMount() {
    ProfileStore.addChangeListener(this._onchange);
  },

  componentWillUnmount: function componentWillUnmount() {
    ProfileStore.removeChangeListener(this._onchange);
  },

  render: function render() {
    var name = this.context.router.getCurrentPath();
    var extract = name.match(/\/(.*)\//g);
    name = extract ? extract.pop().replace(/\//ig, '') : 'home';
    return React.createElement(
      'div',
      { className: 'app', style: [styles.container] },
      React.createElement(Header, { profile: this.state.profile, title: 'Backseat Ref' }),
      React.createElement(
        ReactCSSTransitionGroup,
        { container: 'div', transitionName: name },
        React.createElement(RouteHandler, { key: name })
      )
    );
  },

  _onchange: function _onchange() {
    this.setState({
      profile: ProfileStore.getProfile()
    });
  }

}));

var styles = {
  container: {
    top: 64,
    position: 'absolute',
    left: 0,
    right: 0
  }
};

var routes = React.createElement(
  Route,
  { handler: App, path: '/' },
  React.createElement(DefaultRoute, { handler: App })
);

$(document).ready(function () {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
  });
});