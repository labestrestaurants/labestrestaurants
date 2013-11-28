YUI().use(
	'base', 'json','labr-view-container',
function(Y){
	Y.log('Hello World!!!');
	Y.log(Y);

	Y.namespace('LAbr');

	var config = {
		tittle: 'Russian Restaurants',
		dataRetrieve: {
				location: 'los angeles, ca',
				query: 'burger'
		}
	};


	var AmericanRestaurants = new Y.LAbr.Container(config).retrieveData();
	

	//console.log(DataController);
});