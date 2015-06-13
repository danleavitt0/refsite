var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Route = Router.Route

module.exports = [
    <Route name="app" path="/" handler={App} >
      <Route name="match" path="/match" handler={Match} >
        <NotFoundRoute handler={MatchNotFound} />
        <Route name="matchInfo" path="/match/:matchId" handler={MatchInfo} />
      </Route>
      <Route name="search" path="/search" handler={Search}/>
      <DefaultRoute name="main" handler={MainContainer} />
    </Route>
  ]
