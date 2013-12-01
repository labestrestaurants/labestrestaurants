Y.namespace('LAbr');

var ATTR_CONTENTBOX = 'contentBox',
	ATTR_BOUNDINGBOX = 'boundingBox',

    MyItem =  Y.Base.create("labr-view-item",  Y.Widget, [Y.WidgetChild], {

    /**
     * Description
     * @method initializer
     * @param {} config
     * @return 
     */
    initializer: function (config) {
        var instance = this;
        instance._publishEvents();
    },

	_publishEvents: function(){
		var instance = this;
		instance.publish('openitem',{
				emitFacade:true,
				broadcast : 1
		});
	},
	
    BOUNDING_TEMPLATE : '<li class="list-group-item"></li>',
    CONTENT_TEMPLATE : 	'<div class="item-icon pull-left"></div>' +
						    '<h5 class="list-group-item-heading">' +
						    	'<span>Tros Burgers</span>' +
							    '<div class= "item-rating pull-right" >' +
							    	'<span class="glyphicon glyphicon-star"></span>' +
							    '</div>' +
						    '</h5>' +
						    '<div>' +
							    '<span class="list-group-item-text categories">Fast Food, Restaurant Food</span>' +
							    '<span class="list-group-item-text distance pull-right">0.4 millas</span>' +
							    '<div class="clearfix"></div>'+
							'</div>',


	/**
	 * Description
	 * @method renderUI
	 * @return 
	 */
	renderUI : function () {
		var instance = this,
			boundingBox = instance.get(ATTR_BOUNDINGBOX),
			height = boundingBox.getComputedStyle('height');

		height = parseInt(height.substring(0, height.length-2));
		instance.set('heightX', height);
		
    },
		
	/**
	 * Description
	 * @method bindUI
	 * @return 
	 */
	bindUI: function() {
    	var instance = this,
    		boundingBox = instance.get(ATTR_BOUNDINGBOX),
    		data;

    	boundingBox.on('click', function(e){
    		data = {
    			event: e,
    			address: instance.get('address'), 
        		phone: instance.get('phone'),
        		title: instance.get('title'),
        		latitude: instance.get('latitude'),
        		longitude: instance.get('longitude'),
        		city: instance.get('city'),
        		state: instance.get('state'),
        		latestReview: instance.get('latestReview')
    		}
    		instance.fire('openitem', {data: data});
    		e.stopPropagation();
    	});
    },
	
	/**
	 * Description
	 * @method syncUI
	 * @return 
	 */
	syncUI : function(){
		var instance = this,
			boundingBox = instance.get(ATTR_BOUNDINGBOX);

		boundingBox.one('.list-group-item-heading span').set('innerHTML', instance.get('title'));

		boundingBox.one('span.categories').set('innerHTML', instance.get('categories'));

		boundingBox.one('span.distance').set('innerHTML', instance.get('distance'));

		instance.syncRating();

	},

	applyFilter: function(query){
		var instance = this,
			boundingBox = instance.get(ATTR_BOUNDINGBOX),
			categories = instance.get('categories'),
			filtered = 0,
			queryArray = [],
			tempResult,
			inside,
			highLightItems = [];

		if(query === ''){
			boundingBox.one('span.categories').set('innerHTML', categories);
			boundingBox.replaceClass('hidden', 'show');
		} else {
			queryArray = query.split(',');
			Y.each(queryArray, function(item){
				filtered = Y.AutoCompleteFilters.subWordMatch(item,[{text: categories}]).length;
				if(filtered){
					highLightItems.push(item);
				}
			});

			if(filtered){
				inside = Y.Highlight.all(categories,highLightItems);
				boundingBox.one('span.categories').set('innerHTML', inside);			
			} else {
				boundingBox.replaceClass('show', 'hidden');
			}
		}
	},

	/**
	 * Description
	 * @method syncRating
	 * @return 
	 */
	syncRating: function(){
		var instance = this,
			boundingBox = instance.get(ATTR_BOUNDINGBOX),
			rating = instance.get('rating'),
			i = 1,
			starHtml = '<span class="glyphicon glyphicon-star"></span>',
			startType = '';

		if(rating > 0){
			rating = Math.round(rating);
		}

		for (i; i <= 5; i++) {
			if(i < rating){
				startType = 'glyphicon-star';
			} else {
				startType = 'glyphicon-star-empty';
			}

			starHtml += '<span class="glyphicon ' + startType + '"></span>';
		};

		boundingBox.one('.item-rating').set('innerHTML', starHtml);


	}
    
},
    {
        ATTRS: {
        	address: {
        		value:''
        	},
        	city: {
        		value:''
        	},
			state: {
        		value:''
        	},
        	phone: {
        		value:''
        	},
        	distance: {
        		value:''
        	},
        	rating: {
        		value:''
        	},
        	latestReview: {
        		value: ' I ve been here twice and so far so good - don t know what others are whining about coz my tempura was crisp &amp; fresh, the inari filled plenty tho they were missing the sesame seeds I m used to from other places. The music was too loud on my second visit but we mostly watched the NBA playoff game on the TV anyway so no big deal. I ll definitely be back.'
        	},
        	title: {
        		value:''
        	},
        	categories: {
        		value: ''
        	},
        	latitude: {
        		value:''
        	},
        	longitude: {
        		value: ''
        	},
        	heightX: {
        		value:''
        	}

	    }
        
});

Y.LAbr.Item = MyItem;
