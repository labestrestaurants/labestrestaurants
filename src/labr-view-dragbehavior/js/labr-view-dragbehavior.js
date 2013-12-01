Y.namespace('LAbr');

var ATTR_CONTENTBOX = 'contentBox',

    MyDragBehavior =  Y.Base.create("labr-view-dragbehavior",  Y.Base, [], {

    initializer: function (config) {
        var instance = this;
    },
  
},
    {
        ATTRS: {
            tittle:{
              value:'American Restaurants'
            }
        }
        
});

Y.LAbr.DragBehavior = MyDragBehavior;
