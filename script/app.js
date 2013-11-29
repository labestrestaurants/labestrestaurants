YUI().use(
	'base', 'json','labr-view-container','autocomplete', 'autocomplete-highlighters',
function(Y){
	Y.namespace('LAbr');

	var App = { CategoriesViews: {}},
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
		],
	ac = new Y.AutoComplete({
	  inputNode: '#filter',
	  render   : true
	});


	/**
	 * Description
	 * @method init
	 * @param {} config
	 * @return 
	 */
	App.init = function(config){
		var views = App.CategoriesViews;
		Y.each(categories, function(item){
			views[item.id] = new Y.LAbr.Container(item).render('.panels-container');
		});		
	};

	/**
	 * Description
	 * @method filterItems
	 * @param {} query
	 * @return 
	 */
	App.filterItems = function(query){
		var categories = App.CategoriesViews;
		Y.each(categories, function(item){
			item.filterItems(query);
		});
	}

	ac.on('query', function(e){
		App.filterItems(e.query);
	});

	ac.on('clear', function(e){
		App.filterItems('');
	});

	App.init();
});