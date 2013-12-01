Y.namespace('LAbr');

//shorthands
var NODE = 'node',
	INNER_HTML = 'innerHTML',
	DRAG_NODE = 'dragNode',
	DRAG_ELEMENT_CLASS_NAME = 'dragElementClassName',

    MyDDBehavior =  Y.Base.create("labr-view-ddbehavior",  Y.Base, [], {

    initializer: function (config) {
        var instance = this;
        instance.setupDragDrop();
        instance.bind();
    },

    /**
     * Description
     * @method setupDragDrop
     * @return 
     */
    setupDragDrop: function (){
    	var instance = this,
    		lis = instance.get('draggableElements');

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
		        constrain2node: instance.get('constrain2node')
		    }).addHandle(instance.get('handle'));
		});	
    },

    bind: function (){
		//Thanks to YUI Guys 
		//http://yuilibrary.com/yui/docs/dd/list-drag.html example
    	var instance = this,
    		DDM = Y.DD.DDM;

		DDM.on('drag:start', function(e) {
		    //Get our drag object
		    var drag = e.target;
		    //Set some styles here
		    drag.get(NODE).setStyle('opacity', '.25');
		    drag.get(DRAG_NODE).set(INNER_HTML, drag.get(NODE).get(INNER_HTML));
		    drag.get(DRAG_NODE).setStyles({
		        opacity: '.5',
		        borderColor: drag.get(NODE).getStyle('borderColor'),
		        backgroundColor: drag.get(NODE).getStyle('backgroundColor')
		    });
		});

		DDM.on('drag:end', function(e) {
		    var drag = e.target;
		    //Put our styles back
		    drag.get(NODE).setStyles({
		        visibility: '',
		        opacity: '1'
		    });
		});

		DDM.on('drop:over', function(e) {
		    //Get a reference to our drag and drop nodes
		    var drag = e.drag.get(NODE),
		        drop = e.drop.get(NODE);
		    
		    //Are we dropping on a panel node?
		    if (drop.hasClass(instance.get(DRAG_ELEMENT_CLASS_NAME))) {
		        //Are we not going up?
		        if (!instance.get('goingUp')) {
		            drop = drop.get('nextSibling');
		        }
		        //Add the node to this list
		        e.drop.get(NODE).get('parentNode').insertBefore(drag, drop);
		        //Resize this nodes shim, so we can drop on it later.
		        e.drop.sizeShim();
		    }
		});

		DDM.on('drag:drophit', function(e) {
		    var drop = e.drop.get(NODE),
		        drag = e.drag.get(NODE);

		    //if we are not on an panel, we must have been dropped
		    if (!drop.hasClass(instance.get(DRAG_ELEMENT_CLASS_NAME))) {
		        if (!drop.contains(drag)) {
		            drop.appendChild(drag);
		        }
		    }
		});
    }
  
},
    {
        ATTRS: {
            draggableElements: {
              value:[]
            },
            //Target Node Selector
            constrain2node: {
              value:''
            },
            //Drag Handle Node Selector
            handle: {
              value:''
            },
            goingUp: {
            	value: false
            },
            lastY: {
            	value: 0
            },
            dragElementClassName: {
            	value: ''
            }
        }
        
});

Y.LAbr.DDBehavior = MyDDBehavior;
