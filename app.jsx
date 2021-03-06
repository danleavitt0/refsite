var express = require('express')
var app = express()
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var request = require('request')
var fs = require('fs')
var YQL = require('yql')
var _ = require('lodash')
var wget = require('wget')
var Firebase = require('firebase')
var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/')
var React = require('react')
var Router = require('react-router')
var Teams = require('./Teams.json')
var request = require('request')
var path = require('path')

var routes = require('lib/routes/Routes')

// wget.download('http://www.premierleague.com/en-gb/matchday/results.html?paramComp_8=true&view=.dateSeason', 'public/wget')

var query = new YQL('SELECT * FROM data.html.cssselect(10) WHERE url="http://www.premierleague.com/content/premierleague/en-gb/matchday/results.html?paramClubId=ALL&paramComp_8=true&paramSeasonId=2014&view=.dateSeason" AND css="li.megamenu-match"')
var matches = {}
var referees = {}

var url = 'http://football-api.com/api/'
var options = {
  url:'http://api.football-data.org/alpha/soccerseasons/354',
  headers:{
    'X-Auth-Token':'02e16812e04d4d0faf1ee0656617ee1c'
  }
}

request.get(options, function(err,data,response){
  var teamArray = {}
  var resp = JSON.parse(response)
  var fixtureUrl = resp._links.teams.href
  request.get({url:fixtureUrl}, function(err,data,response){
    var teams = JSON.parse(response).teams
    _.forEach(teams, function(team,idx){
      teamArray[team.code] = team
    })
    fireBaseRef.update({teams:teamArray})
  })
})

// fireBaseRef.on("value", function(snapshot){
//   matches = snapshot.val().matches || {}
//   referees = snapshot.val().referees || {}
//   // runQuery()
//
// })

function getTeams (team) {
  return {
    home: team[0],
    away: team[2],
    score: team[1].content
  }
}

function search(newRef) {
  if(_.isEmpty(referees[newRef])){
    referees[newRef] = {
      name:newRef
    }
    fireBaseRef.update({'referees':referees})
  }
}

function runQuery() {
  query.exec(function (error, response) {
    if(response.query.results.results) {
      _.forEach(response.query.results.results.li, function(element){
        var match = {}
        var div = element.div
        match.id = element.matchid
        match.info = getTeams(div[1].a.span)
        match.referee = div[5].a.content
        match.time = div[0].span.timestamp
        match.teams = Teams[match.info.home].name + Teams[match.info.away].name
        if(parseInt(match.id)){
          search(match.referee)
          if(_.isEqual(match, matches[match.id]))
            return
          else matches[match.id] = match
        }
      })
      fireBaseRef.update({'matches':matches})
    }
  })
}

var engine = require('react-engine').server.create({
  reactRoutes: path.join(__dirname + '/lib/routes/Routes.js')
})

app.engine('.js', engine)
app.set('views', __dirname + '/public/views')
app.set('view engine', 'js')
app.set('view', require('react-engine/lib/expressView'))

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('/favicon.ico', function(req,res){
  res.send(null)
})

app.use(function(req,res,next){
  Router.run(routes, req.path, function(Handler,state){
    var html = React.renderToString(<Handler/>)
    return res.render(req.url, html)
  })
  next()
})

app.listen(process.env.PORT || 3000);
