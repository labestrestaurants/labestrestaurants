YUI.add('labr-view-item', function (Y, NAME) {

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
			contentBox = instance.get(ATTR_CONTENTBOX);
    },
		
	/**
	 * Description
	 * @method bindUI
	 * @return 
	 */
	bindUI: function() {
    	var instance = this,
    		contentBox = instance.get(ATTR_CONTENTBOX);
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
        	distance: {
        		value:''
        	},
        	phone: {
        		value:''
        	},
        	address: {
        		value:''
        	},
        	rating: {
        		value:''
        	},
        	title: {
        		value:''
        	},
        	categories: {
        		value: {}
        	},
    	
        }
        
});

Y.LAbr.Item = MyItem;


}, '@VERSION@', {"requires": ["widget", "widget-child"], "skinnable": true});
