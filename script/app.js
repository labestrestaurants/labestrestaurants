YUI().use(
	'base', 'json','labr-view-container','autocomplete', 'autocomplete-highlighters',
	'dd-constrain', 'dd-proxy', 'dd-drop', 'labr-view-itemdetails',
function(Y){
	Y.namespace('LAbr');

	//Basic App Configurations
	var App = { 
				CategoriesViews: {}, 
				Maps:{
						marker:{},
						apiLoad:0
				}
		},
		categories = APP_config.categories,
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
			views[item.name] = new Y.LAbr.Container(item).render('.panels-container');
		});	
		App.reorderPanels();	
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
	};

	App.reorderPanels = function(){
		//Get the list of li's in the lists and make them draggable
		var lis = Y.Node.all('.panel');
		lis.each(function(v, k) {
		    var dd = new Y.DD.Drag({
		        node: v,
		        //Make it Drop target and pass this config to the Drop constructor
		        target: {
		            padding: '0 0 0 20'
		        }
		    }).plug(Y.Plugin.DDProxy, {
		        //Don't move the node at the end of the drag
		        moveOnEnd: false
		    }).plug(Y.Plugin.DDConstrained, {
		        //Keep it inside the #play node
		        constrain2node: '.panels-container'
		    }).addHandle('.drag-icon');
		});		
	}

	App.showRestaurantDetails = function(e){
		var data = e.data,
			itemNode = e.currentTarget.get('boundingBox');
	

		data.styles = {
			top: itemNode.getY() + e.currentTarget.get('heightX'), //+ itemNode.getComputedStyle('height'),
			left: itemNode.getX(),
			display: 'block'
		}

		Y.one('.mask-inside').removeClass('hidden');
		Y.one('.app-container').addClass('disable');
		
		if(App.ItemDetails){
			App.showRestaurantItemDetails(data);
		} else {
			App.createRestaurantItemDetails(data);
		}
		App.syncPlace({latitude: data.latitude, longitude: data.longitude}, data.title);

	};

	App.showRestaurantItemDetails = function(restaurantItem){
		//TODO: Duplicate code here
		Y.one('.mask-inside').removeClass('hidden');
		Y.one('.app-container').addClass('disable');
		var syncData = [
				{
					selector: '.item-details-title',
					value: restaurantItem.title
				},
				{
					selector: 'p.item-subdetail0',
					value: '<strong>Address</strong><br>' + restaurantItem.address + '<br>' + restaurantItem.state + ',' + restaurantItem.city
				},
				{
					selector: 'p.item-subdetail1',
					value: '<strong>Phone</strong><br>' + restaurantItem.phone
				},
				{
					selector: '.item-details-subdetails-hidden em',
					value: restaurantItem.latestReview
				}
		];
		App.ItemDetails.syncData(syncData);
		App.ItemDetails.get('boundingBox').removeClass('hidden');
		App.ItemDetails.get('boundingBox').setStyles(restaurantItem.styles);
	};

	App.hideRestaurantDetails = function(e){
		Y.one('.mask-inside').addClass('hidden');
		Y.one('.app-container').removeClass('disable');		
	};

	App.createRestaurantItemDetails = function(restaurantItem){
		//ItemDetails Widget
		//We can reuse this widget in other apps
		var ItemDetails = {
			title: restaurantItem.title,
			styles: restaurantItem.styles,
			//HTML Node
			hero: Y.Node.create('<div id="map_canvas"></div>'),
			subdetails: [
				{
					html: '<strong>Address</strong><br>' + restaurantItem.address + '<br>' + restaurantItem.state + ',' + restaurantItem.city,
				},
				{
					html: '<strong>Phone</strong><br>' + restaurantItem.phone
				},
				{
					html: '<span class="item-details-subdetails-trigger">' +
								'<span class="glyphicon glyphicon-user"></span>' +
			  						'<img src="assets/images/bubbles.png">' +
		  					'</span>',
		  			trigger: 'click'
				}
			],
			hiddenSubDetails: [
				{
					html: '<div class="col-md-12">'+
								'<strong>Last Review</strong><br>'+
	  							 '<h6>'+
		  							 '<em>'+
		  							 	restaurantItem.latestReview +
		  							 '</em>'+
	  							 '</h6>'+
							'</div>'
				}
			]

		};

		App.ItemDetails = new Y.LAbr.ItemDetails(ItemDetails).render('body');
	};

	App.mapsApiAsyncLoading = function(){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
		      'callback=initializeGoogleApi';
		document.body.appendChild(script);
	};

	App.syncPlace = function(latLngValue, placeName){
		if(App.Maps.apiLoad){
			var map = App.Maps.map,
				myLatlng = new google.maps.LatLng(latLngValue.latitude, latLngValue.longitude);
				mapOptions = {
					center: myLatlng,
					zoom: 17,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				},
				marker = App.Maps.marker;

			if(!map) {
				map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
				marker = new google.maps.Marker({
				    position: myLatlng,
				    map: map,
				    animation: google.maps.Animation.DROP,
				    title: placeName
				});

				App.Maps.marker = marker;
				App.Maps.map = map;
			} else {
				map.setCenter(myLatlng);
				map.setZoom(17);
				marker.setMap(null);
				marker = new google.maps.Marker({
				    position: myLatlng,
				    map: map,
				    animation: google.maps.Animation.DROP,
				    title: placeName
				});
			}
		}
	};


	//Filter Listeners
	ac.on('query', function(e){
		App.filterItems(e.query);
	});

	ac.on('clear', function(e){
		App.filterItems('');
	});










	//Thanks to YUI Guys 
	//http://yuilibrary.com/yui/docs/dd/list-drag.html example
	Y.DD.DDM.on('drag:start', function(e) {
	    //Get our drag object
	    var drag = e.target;
	    //Set some styles here
	    drag.get('node').setStyle('opacity', '.25');
	    drag.get('dragNode').set('innerHTML', drag.get('node').get('innerHTML'));
	    drag.get('dragNode').setStyles({
	        opacity: '.5',
	        borderColor: drag.get('node').getStyle('borderColor'),
	        backgroundColor: drag.get('node').getStyle('backgroundColor')
	    });
	});

	Y.DD.DDM.on('drag:end', function(e) {
	    var drag = e.target;
	    //Put our styles back
	    drag.get('node').setStyles({
	        visibility: '',
	        opacity: '1'
	    });
	});

	Y.DD.DDM.on('drop:over', function(e) {
	    //Get a reference to our drag and drop nodes
	    var drag = e.drag.get('node'),
	        drop = e.drop.get('node');
	    
	    //Are we dropping on a panel node?
	    if (drop.hasClass('panel')) {
	        //Are we not going up?
	        if (!goingUp) {
	            drop = drop.get('nextSibling');
	        }
	        //Add the node to this list
	        e.drop.get('node').get('parentNode').insertBefore(drag, drop);
	        //Resize this nodes shim, so we can drop on it later.
	        e.drop.sizeShim();
	    }
	});

	Y.DD.DDM.on('drag:drophit', function(e) {
	    var drop = e.drop.get('node'),
	        drag = e.drag.get('node');

	    //if we are not on an panel, we must have been dropped on a ul
	    if (!drop.hasClass('panel')) {
	        if (!drop.contains(drag)) {
	            drop.appendChild(drag);
	        }
	    }
	});

	var goingUp = false, lastY = 0;

	Y.on('labr-view-item:openitem', App.showRestaurantDetails);

	Y.on('labr-view-itemdetails:closeitem', App.hideRestaurantDetails);

	window.initializeGoogleApi = function(){
		console.log('Google Maps Ready');
		App.Maps.apiLoad = 1;
	}

	App.mapsApiAsyncLoading();
	App.init();



	











});
