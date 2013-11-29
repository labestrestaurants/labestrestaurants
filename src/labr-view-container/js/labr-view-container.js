Y.namespace('LAbr');

var ATTR_CONTENTBOX = 'contentBox',

    MyContainer =  Y.Base.create("labr-view-container",  Y.Widget, [Y.WidgetParent], {

    /**
     * Description
     * @method initializer
     * @param {} config
     * @return 
     */
    initializer: function (config) {
        var instance = this;
    },
	
    CONTENT_TEMPLATE : '<div class="panel panel-default">' +
    						'<div class="panel-heading">' + 
    				  		'<div class="drag-icon pull-left"></div>' +
				  			'<span class="tittle">Japanese Restaurants</span>' + 
				  			'</div>' +
				  			'<ul class="list-group">' + 
				  				'<li class="list-group-item loader"></li>' +
				  			'</ul>' +
				  		'</div>',

	/**
	 * Description
	 * @method renderUI
	 * @return 
	 */
	renderUI : function () {
		var instance = this,
			contentBox = instance.get(ATTR_CONTENTBOX);
		
		contentBox.one('span.tittle').set('innerHTML', instance.get('tittle'));
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
			contentBox = instance.get(ATTR_CONTENTBOX);

		instance.retrieveData();
	},

	/**
	 * Description
	 * @method renderChilds
	 * @param {} data
	 * @return 
	 */
	renderChilds : function(data){
		var instance = this,
			contentBox = instance.get(ATTR_CONTENTBOX),
			itemsContainer = contentBox.one('.list-group'),
			childWidget,
			childs = data.results;

		Y.each(childs, function(item){
			childWidget = new Y.LAbr.Item(item);
			instance.add(childWidget);
			itemsContainer.appendChild(childWidget.render());
		});

		//I d'like remove html elements that can be used after
		itemsContainer.one('.loader').addClass('hidden');


	},

	/**
	 * Description
	 * @method retrieveData
	 * @return 
	 */
	retrieveData: function(){
		var instance = this,
		dataRetrieve = instance.get('dataRetrieve'),
		statement = [
						'select * from local.search'+
						' where query="',
						dataRetrieve.query,
						'" and location="',
						dataRetrieve.location,
						'"',
						' | sort(field="Distance", descending="false",field="Rating.AverageRating", descending="true")',
						'| truncate(count='+ dataRetrieve.count + ')'
					].join(''),
		data;

        Y.YQL(statement, {
            	allowCache: false,
            	timeout:9000,
            	on: {
                    /**
                     * Description
                     * @method success
                     * @param {} r
                     * @return 
                     */
                    success: function(r){
 						data = instance.parseData(r);
 						instance.renderChilds(data);
                 	},
                 
					/**
					 * Description
					 * @method failure
					 * @param {} r
					 * @return 
					 */
					failure: function(r){
						console.log(r);
                	}
				}
        });
	},

	filterItems: function(query){
		var instance = this,
			size = instance.size(),
			i = 0;
		for (var i = 0; i < size; i++) {
			instance.item(i).applyFilter(query);
		};

	},

	/**
	 * Description
	 * @method parseData
	 * @param {} data
	 * @return dataOut
	 */
	parseData: function(data){
		var dataOut,
			schema = {
			    resultListLocator: "query.results.Result",
			    resultFields: [
			        {
			            key: "title",
			            locator: "Title"
			        },
			        {
			            key: "phone",
			            locator: "Phone"
			        },
			        {
			            key: "address",
			            locator: "Address"
			        },
			        {
			            key: "categories",
			            locator: "Categories.Category",
			            /**
            			 * Description
            			 * @method parser
            			 * @param {} val
            			 * @return result
            			 */
            			parser: function (val) {
			            	var result = '';
			                Y.each(val, function(item){
			                	result += item.content + ', '
			                });
			                return result;
			            }			            
			        },
			        {
			            key: "distance",
			            locator: "Distance",
			            /**
            			 * Description
            			 * @method parser
            			 * @param {} val
            			 * @return BinaryExpression
            			 */
            			parser: function (val) {
			                return val + ' millas';
			            }
			        },
			        {
			            key: "rating",
			            locator: "Rating.AverageRating",
			            /**
            			 * Description
            			 * @method parser
            			 * @param {} val
            			 * @return ConditionalExpression
            			 */
            			parser: function (val) {
			                return isNaN(val) ? -1 : +val;
			            }
			        }
			    ]
			};

		dataOut = Y.DataSchema.JSON.apply(schema,data);
		return dataOut;		
	}
    
},
    {
        ATTRS: {
            tittle:{
              value:'American Restaurants'
            },

            dataRetrieve: {
            	value: {
            		location: 'los angeles, ca',
            		query: 'burger'
            	}
            }


        }
        
});

Y.LAbr.Container = MyContainer;
