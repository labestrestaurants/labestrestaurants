YUI().use(
	'base', 'json','labr-view-container','autocomplete', 'autocomplete-highlighters',
	'dd-constrain', 'dd-proxy', 'dd-drop',
function(Y){
	Y.namespace('LAbr');

	var App = { CategoriesViews: {}},
		categories = [
			{
				name: 'American',
				tittle: 'Americans Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'burger',
						count:2
				}				
			},
			{
				name: 'Japanese',
				tittle: 'Japanese Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'japanese',
						count:2
				}				
			},
			{
				name: 'Korean',
				tittle: 'Korean Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'korean',
						count:2
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

	App.init();

	var myLatlng = new google.maps.LatLng(37.76444, -122.46666);

	var mapOptions = {
	  center: myLatlng,
	  zoom: 17,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
  });


});

//VCItv4rV34FRu8RGyR6PrSo31wxpMXoZ7Ee_yOcPZFywdnCHbkWGkpoIak21L_RaK8rut3NqztAcm.MEMuX5mzYUwDOMSow-