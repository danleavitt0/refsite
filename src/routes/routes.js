import React from 'react'
import Search from 'lib/views/Search'
import Match from 'lib/views/Match'
import Index from 'lib/Index'
import {MainContainer, MatchInfo} from 'lib/components'
import {DefaultRoute, NotFoundRoute, Route, HashHistory} from 'react-router'

var routes = (
  <Route name="main" path="/" handler = {Index} >
    <Route name="search" path="/search" handler= {Search}/>
    <Route name="match" path="/match" handler={Match}>
      <Route name="matchInfo" path="/match/:id" handler={MatchInfo}/>
    </Route>
    <DefaultRoute name="home" handler={MainContainer} />
  </Route>
)

module.exports = routes
