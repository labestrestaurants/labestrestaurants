YUI().use(
	'base', 'json','labr-view-container',
function(Y){
	Y.namespace('LAbr');

	var config = {
		tittle: 'Americans Restaurants',
		dataRetrieve: {
				location: 'los angeles, ca',
				query: 'burger'
		}
	},
	AmericanRestaurants = new Y.LAbr.Container(config).render('.panels-container');
});