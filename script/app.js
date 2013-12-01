YUI().use('base', 'json', 'labr-view-container', 'autocomplete', 'autocomplete-highlighters', 'labr-view-ddbehavior', 'labr-view-itemdetails', 'labr-controller-app', function (Y) {
Y.namespace('LAbr');

	//Basic App Configurations
	var App = {
		CategoriesViews: {},
		Maps: {
			marker: {},
			apiLoad: 0
		},
		AppController: {}
	},
		categories = APP_config.categories,
		ac = new Y.AutoComplete({
			inputNode: '#filter',
			render: true
		});

	Y.LAbr.App = App;
	/**
	 * Description
	 * @method init
	 * @param {} config
	 * @return 
	 */
	App.init = function (config) {
		App.AppController = new Y.LAbr.AppController();
		App.AppController.showRestaurantCategoriesAction(categories);

		//Listener view events and execute controllers actions
		Y.on('labr-view-item:openitem', App.AppController.restaurantShowDetailAction, App.AppController);
		Y.on('labr-view-itemdetails:closeitem', App.AppController.hideRestaurantDetailAction, App.AppController);
	};

	/**
	 * Description
	 * @method mapsApiAsyncLoading
	 * @return 
	 */
	App.mapsApiAsyncLoading = function () {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initializeGoogleApi';
		document.body.appendChild(script);
	};

	/**
	 * Description
	 * @method initializeGoogleApi
	 * @return 
	 */
	window.initializeGoogleApi = function () {
		console.log('Google Maps Ready');
		App.Maps.apiLoad = 1;
	}

	//Filter Listeners
	ac.on('query', function (e) {
		App.AppController.filterItems(e.query);
	});

	ac.on('clear', function (e) {
		App.AppController.filterItems('');
	});

	App.mapsApiAsyncLoading();
	App.init();
});