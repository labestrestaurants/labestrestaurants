Y.namespace('LAbr');

var ATTR_CONTENTBOX = 'contentBox',

    MyContainer =  Y.Base.create("labr-view-container",  Y.Widget, [], {

    initializer: function (config) {
        var instance = this;
    },
	
    CONTENT_TEMPLATE : "<div>Hello</div>",

	RenderUI : function () {
		var instance = this,
			contentBox = instance.get(ATTR_CONTENTBOX);
    },
		
	bindUI: function() {
    	var instance = this,
    		contentBox = instance.get(ATTR_CONTENTBOX);
    },
	
	syncUI : function(){
		var instance = this,
			contentBox = instance.get(ATTR_CONTENTBOX);

	},

	retrieveData: function(){
		var instance = this,
		dataRetrieve = instance.get('dataRetrieve'),
		statement = [
						'select * from local.search where query="',
						dataRetrieve.query,
						'" and location="',
						dataRetrieve.location,
						'"'
					].join('');

        YQL(statement, {
            	allowCache: false,
            	timeout:9000,
            	on: {
                    success: function(r){
 						console.log(r);
 						instance.parseData(r);
                 	},
                 
					failure: function(r){
						console.log(r);
                	}
				}
        });
	},

	parseData: function(data){
		var data_out,
			schema = {
			    resultListLocator: "query.results.Result"
			};

		data_out = Y.DataSchema.JSON.apply(schema,data);
		console.log(data_out);		
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
