var firstRoute  = require('./categoryDbo.json');
var secondRoute = require('./categoryGroupDbo.json');
var thirdRoute  = require('./events.json');
var fourthRoute = require('./users.json');
// and so on

module.exports = function() {
return {
firstRoute  : firstRoute,
secondRoute : secondRoute,
thirdRoute  : thirdRoute,
fourthRoute : fourthRoute
// and so on
}
}