var request = require('request')
  , cheerio = require('cheerio')
  , async = require('async')
  , format = require('util').format;

var reddits = [ 'programming', 'javascript', 'node' ]
  , concurrency = 2;

var url = format('http://www.espnfc.us/barclays-premier-league/23/scores?date=20150524');
request(url, function (err, response, body) {
  if (err) throw err;
  var $ = cheerio.load(body);
  $('div.score-box').each(function () {
    console.log($(this).text())
  });
  next();
});