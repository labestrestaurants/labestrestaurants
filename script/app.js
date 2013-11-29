YUI().use(
	'base', 'json','labr-view-container',
function(Y){
	Y.namespace('LAbr');

	var App = { Views: {}},
		categories = [
			{
				id: 'American',
				tittle: 'Americans Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'burger',
						count:5
				}				
			},
			{
				id: 'Japanese',
				tittle: 'Japanese Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'japanese',
						count:5
				}				
			},
			{
				id: 'Korean',
				tittle: 'Korean Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'korean',
						count:5
				}				
			}
		];


	App.init = function(config){
		var views = App.Views;
		Y.each(categories, function(item){
			views[item.id] = new Y.LAbr.Container(item).render('.panels-container');
		});		
	};

	App.init();
	//AmericanRestaurants = new Y.LAbr.Container(config).render('.panels-container');
});