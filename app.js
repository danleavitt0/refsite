var express  = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var request = require('request');
var fs = require('fs');
var YQL = require('yql');
var _ = require('lodash');
var wget = require('wget');
var Firebase = require('firebase');
var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches')

// wget.download('http://www.premierleague.com/en-gb/matchday/results.html?paramComp_8=true&view=.dateSeason', 'public/wget')

var query = new YQL('SELECT * FROM data.html.cssselect(10) WHERE url="http://www.premierleague.com/content/premierleague/en-gb/matchday/results.html?paramClubId=ALL&paramComp_8=true&paramSeasonId=2014&view=.dateSeason" AND css="li.megamenu-match"')
var matches = []

fireBaseRef.on("value", function(snapshot){
  matches = snapshot.val()
})

function getTeams (team) {
  return {
    home: team[0],
    away: team[2],
    score: team[1].content
  }
}

query.exec(function (error, response) {
  _.forEach(response.query.results.results.li, function(element){
    var match = {}
    var div = element.div
    match.id = element.matchid
    match.info = getTeams(div[1].a.span)
    match.referee = div[5].a.content
    match.time = div[0].span.timestamp
    if(!matches.id && match.id)
      matches[match.id] = match
  })
  fireBaseRef.update({matches:matches})
})

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('*', function(req, res) {
  res.send('./' + req.url);
});

app.listen(process.env.PORT || 3000);