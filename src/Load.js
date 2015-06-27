var React = require('react')
var Router = require('react-router')
var Routes = require('lib/routes/Routes')
var LocationActions = require('react-router/lib/actions/LocationActions');
var ScrollBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        setTimeout(function(){
          window.scrollTo(0, 0)
        }, 700)
        break
      case LocationActions.POP:
        if (position) {
          setTimeout(function(){
            window.scrollTo(position.x, position.y)
          }, 700)
        } else {
          setTimeout(function(){
            window.scrollTo(0, 0)
          }, 700)
        }
        break
    }
  }

}

var router = Router.create({
  routes: Routes,
  location: Router.HistoryLocation,
  scrollBehavior: ScrollBehavior
})

router.run(function (Handler) {
  React.render(<Handler/>, document.body)
})
