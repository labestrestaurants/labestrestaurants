if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/labr-view-container/labr-view-container.js']) {
   __coverage__['build/labr-view-container/labr-view-container.js'] = {"path":"build/labr-view-container/labr-view-container.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":17},"end":{"line":15,"column":35}}},"3":{"name":"(anonymous_3)","line":34,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":24}}},"4":{"name":"(anonymous_4)","line":46,"loc":{"start":{"line":46,"column":9},"end":{"line":46,"column":20}}},"5":{"name":"(anonymous_5)","line":56,"loc":{"start":{"line":56,"column":10},"end":{"line":56,"column":20}}},"6":{"name":"(anonymous_6)","line":69,"loc":{"start":{"line":69,"column":16},"end":{"line":69,"column":30}}},"7":{"name":"(anonymous_7)","line":76,"loc":{"start":{"line":76,"column":17},"end":{"line":76,"column":31}}},"8":{"name":"(anonymous_8)","line":93,"loc":{"start":{"line":93,"column":15},"end":{"line":93,"column":25}}},"9":{"name":"(anonymous_9)","line":118,"loc":{"start":{"line":118,"column":29},"end":{"line":118,"column":40}}},"10":{"name":"(anonymous_10)","line":129,"loc":{"start":{"line":129,"column":14},"end":{"line":129,"column":25}}},"11":{"name":"(anonymous_11)","line":136,"loc":{"start":{"line":136,"column":14},"end":{"line":136,"column":29}}},"12":{"name":"(anonymous_12)","line":152,"loc":{"start":{"line":152,"column":12},"end":{"line":152,"column":26}}},"13":{"name":"(anonymous_13)","line":178,"loc":{"start":{"line":178,"column":23},"end":{"line":178,"column":38}}},"14":{"name":"(anonymous_14)","line":180,"loc":{"start":{"line":180,"column":31},"end":{"line":180,"column":45}}},"15":{"name":"(anonymous_15)","line":195,"loc":{"start":{"line":195,"column":23},"end":{"line":195,"column":38}}},"16":{"name":"(anonymous_16)","line":208,"loc":{"start":{"line":208,"column":23},"end":{"line":208,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":241,"column":122}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":20}},"3":{"start":{"line":5,"column":0},"end":{"line":236,"column":3}},"4":{"start":{"line":16,"column":8},"end":{"line":16,"column":28}},"5":{"start":{"line":35,"column":2},"end":{"line":36,"column":46}},"6":{"start":{"line":38,"column":2},"end":{"line":38,"column":73}},"7":{"start":{"line":47,"column":5},"end":{"line":48,"column":49}},"8":{"start":{"line":57,"column":2},"end":{"line":58,"column":46}},"9":{"start":{"line":60,"column":2},"end":{"line":60,"column":26}},"10":{"start":{"line":70,"column":2},"end":{"line":74,"column":25}},"11":{"start":{"line":76,"column":2},"end":{"line":80,"column":5}},"12":{"start":{"line":77,"column":3},"end":{"line":77,"column":39}},"13":{"start":{"line":78,"column":3},"end":{"line":78,"column":29}},"14":{"start":{"line":79,"column":3},"end":{"line":79,"column":52}},"15":{"start":{"line":83,"column":2},"end":{"line":83,"column":51}},"16":{"start":{"line":94,"column":2},"end":{"line":106,"column":7}},"17":{"start":{"line":108,"column":8},"end":{"line":133,"column":11}},"18":{"start":{"line":119,"column":7},"end":{"line":119,"column":36}},"19":{"start":{"line":120,"column":7},"end":{"line":120,"column":35}},"20":{"start":{"line":130,"column":6},"end":{"line":130,"column":21}},"21":{"start":{"line":137,"column":2},"end":{"line":139,"column":9}},"22":{"start":{"line":140,"column":2},"end":{"line":142,"column":3}},"23":{"start":{"line":141,"column":3},"end":{"line":141,"column":39}},"24":{"start":{"line":153,"column":2},"end":{"line":213,"column":5}},"25":{"start":{"line":179,"column":16},"end":{"line":179,"column":32}},"26":{"start":{"line":180,"column":19},"end":{"line":182,"column":22}},"27":{"start":{"line":181,"column":20},"end":{"line":182,"column":19}},"28":{"start":{"line":183,"column":19},"end":{"line":183,"column":33}},"29":{"start":{"line":196,"column":19},"end":{"line":196,"column":42}},"30":{"start":{"line":209,"column":19},"end":{"line":209,"column":49}},"31":{"start":{"line":215,"column":2},"end":{"line":215,"column":49}},"32":{"start":{"line":216,"column":2},"end":{"line":216,"column":17}},"33":{"start":{"line":238,"column":0},"end":{"line":238,"column":31}}},"branchMap":{"1":{"line":209,"type":"cond-expr","locations":[{"start":{"line":209,"column":39},"end":{"line":209,"column":41}},{"start":{"line":209,"column":44},"end":{"line":209,"column":48}}]}},"code":["(function () { YUI.add('labr-view-container', function (Y, NAME) {","","Y.namespace('LAbr');","","var ATTR_CONTENTBOX = 'contentBox',","","    MyContainer =  Y.Base.create(\"labr-view-container\",  Y.Widget, [Y.WidgetParent], {","","    /**","     * Description","     * @method initializer","     * @param {} config","     * @return ","     */","    initializer: function (config) {","        var instance = this;","    },","\t","    CONTENT_TEMPLATE : '<div class=\"panel panel-default\">' +","    \t\t\t\t\t\t'<div class=\"panel-heading\">' + ","    \t\t\t\t  \t\t'<div class=\"drag-icon pull-left\"></div>' +","\t\t\t\t  \t\t\t'<span class=\"tittle\">Japanese Restaurants</span>' + ","\t\t\t\t  \t\t\t'</div>' +","\t\t\t\t  \t\t\t'<ul class=\"list-group\">' + ","\t\t\t\t  \t\t\t\t'<li class=\"list-group-item loader\"></li>' +","\t\t\t\t  \t\t\t'</ul>' +","\t\t\t\t  \t\t'</div>',","","\t/**","\t * Description","\t * @method renderUI","\t * @return ","\t */","\trenderUI : function () {","\t\tvar instance = this,","\t\t\tcontentBox = instance.get(ATTR_CONTENTBOX);","\t\t","\t\tcontentBox.one('span.tittle').set('innerHTML', instance.get('tittle'));","    },","\t\t","\t/**","\t * Description","\t * @method bindUI","\t * @return ","\t */","\tbindUI: function() {","    \tvar instance = this,","    \t\tcontentBox = instance.get(ATTR_CONTENTBOX);","    },","\t","\t/**","\t * Description","\t * @method syncUI","\t * @return ","\t */","\tsyncUI : function(){","\t\tvar instance = this,","\t\t\tcontentBox = instance.get(ATTR_CONTENTBOX);","","\t\tinstance.retrieveData();","\t},","","\t/**","\t * Description","\t * @method renderChilds","\t * @param {} data","\t * @return ","\t */","\trenderChilds : function(data){","\t\tvar instance = this,","\t\t\tcontentBox = instance.get(ATTR_CONTENTBOX),","\t\t\titemsContainer = contentBox.one('.list-group'),","\t\t\tchildWidget,","\t\t\tchilds = data.results;","","\t\tY.each(childs, function(item){","\t\t\tchildWidget = new Y.LAbr.Item(item);","\t\t\tinstance.add(childWidget);","\t\t\titemsContainer.appendChild(childWidget.render());","\t\t});","","\t\t//I d'like remove html elements that can be used after","\t\titemsContainer.one('.loader').addClass('hidden');","","","\t},","","\t/**","\t * Description","\t * @method retrieveData","\t * @return ","\t */","\tretrieveData: function(){","\t\tvar instance = this,","\t\tdataRetrieve = instance.get('dataRetrieve'),","\t\tstatement = [","\t\t\t\t\t\t'select * from local.search'+","\t\t\t\t\t\t' where query=\"',","\t\t\t\t\t\tdataRetrieve.query,","\t\t\t\t\t\t'\" and location=\"',","\t\t\t\t\t\tdataRetrieve.location,","\t\t\t\t\t\t'\"',","\t\t\t\t\t\t' | sort(field=\"Distance\", descending=\"false\",field=\"Rating.AverageRating\", descending=\"true\")',","\t\t\t\t\t\t'| truncate(count='+ dataRetrieve.count + ')'","\t\t\t\t\t].join(''),","\t\tdata;","","        Y.YQL(statement, {","            \tallowCache: false,","            \ttimeout:9000,","            \ton: {","                    /**","                     * Description","                     * @method success","                     * @param {} r","                     * @return ","                     */","                    success: function(r){"," \t\t\t\t\t\tdata = instance.parseData(r);"," \t\t\t\t\t\tinstance.renderChilds(data);","                 \t},","                 ","\t\t\t\t\t/**","\t\t\t\t\t * Description","\t\t\t\t\t * @method failure","\t\t\t\t\t * @param {} r","\t\t\t\t\t * @return ","\t\t\t\t\t */","\t\t\t\t\tfailure: function(r){","\t\t\t\t\t\tconsole.log(r);","                \t}","\t\t\t\t}","        });","\t},","","\tfilterItems: function(query){","\t\tvar instance = this,","\t\t\tsize = instance.size(),","\t\t\ti = 0;","\t\tfor (var i = 0; i < size; i++) {","\t\t\tinstance.item(i).applyFilter(query);","\t\t};","","\t},","","\t/**","\t * Description","\t * @method parseData","\t * @param {} data","\t * @return dataOut","\t */","\tparseData: function(data){","\t\tvar dataOut,","\t\t\tschema = {","\t\t\t    resultListLocator: \"query.results.Result\",","\t\t\t    resultFields: [","\t\t\t        {","\t\t\t            key: \"title\",","\t\t\t            locator: \"Title\"","\t\t\t        },","\t\t\t        {","\t\t\t            key: \"phone\",","\t\t\t            locator: \"Phone\"","\t\t\t        },","\t\t\t        {","\t\t\t            key: \"address\",","\t\t\t            locator: \"Address\"","\t\t\t        },","\t\t\t        {","\t\t\t            key: \"categories\",","\t\t\t            locator: \"Categories.Category\",","\t\t\t            /**","            \t\t\t * Description","            \t\t\t * @method parser","            \t\t\t * @param {} val","            \t\t\t * @return result","            \t\t\t */","            \t\t\tparser: function (val) {","\t\t\t            \tvar result = '';","\t\t\t                Y.each(val, function(item){","\t\t\t                \tresult += item.content + ', '","\t\t\t                });","\t\t\t                return result;","\t\t\t            }\t\t\t            ","\t\t\t        },","\t\t\t        {","\t\t\t            key: \"distance\",","\t\t\t            locator: \"Distance\",","\t\t\t            /**","            \t\t\t * Description","            \t\t\t * @method parser","            \t\t\t * @param {} val","            \t\t\t * @return BinaryExpression","            \t\t\t */","            \t\t\tparser: function (val) {","\t\t\t                return val + ' millas';","\t\t\t            }","\t\t\t        },","\t\t\t        {","\t\t\t            key: \"rating\",","\t\t\t            locator: \"Rating.AverageRating\",","\t\t\t            /**","            \t\t\t * Description","            \t\t\t * @method parser","            \t\t\t * @param {} val","            \t\t\t * @return ConditionalExpression","            \t\t\t */","            \t\t\tparser: function (val) {","\t\t\t                return isNaN(val) ? -1 : +val;","\t\t\t            }","\t\t\t        }","\t\t\t    ]","\t\t\t};","","\t\tdataOut = Y.DataSchema.JSON.apply(schema,data);","\t\treturn dataOut;\t\t","\t}","    ","},","    {","        ATTRS: {","            tittle:{","              value:'American Restaurants'","            },","","            dataRetrieve: {","            \tvalue: {","            \t\tlocation: 'los angeles, ca',","            \t\tquery: 'burger'","            \t}","            }","","","        }","        ","});","","Y.LAbr.Container = MyContainer;","","","}, '@VERSION@', {\"requires\": [\"widget\", \"yql\", \"dataschema-json\", \"widget-parent\", \"labr-view-item\"], \"skinnable\": true});","","}());"]};
}
var __cov_6VGNSSk1cR4HRmg75z6u1w = __coverage__['build/labr-view-container/labr-view-container.js'];
__cov_6VGNSSk1cR4HRmg75z6u1w.s['1']++;YUI.add('labr-view-container',function(Y,NAME){__cov_6VGNSSk1cR4HRmg75z6u1w.f['1']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['2']++;Y.namespace('LAbr');__cov_6VGNSSk1cR4HRmg75z6u1w.s['3']++;var ATTR_CONTENTBOX='contentBox',MyContainer=Y.Base.create('labr-view-container',Y.Widget,[Y.WidgetParent],{initializer:function(config){__cov_6VGNSSk1cR4HRmg75z6u1w.f['2']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['4']++;var instance=this;},CONTENT_TEMPLATE:'<div class="panel panel-default">'+'<div class="panel-heading">'+'<div class="drag-icon pull-left"></div>'+'<span class="tittle">Japanese Restaurants</span>'+'</div>'+'<ul class="list-group">'+'<li class="list-group-item loader"></li>'+'</ul>'+'</div>',renderUI:function(){__cov_6VGNSSk1cR4HRmg75z6u1w.f['3']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['5']++;var instance=this,contentBox=instance.get(ATTR_CONTENTBOX);__cov_6VGNSSk1cR4HRmg75z6u1w.s['6']++;contentBox.one('span.tittle').set('innerHTML',instance.get('tittle'));},bindUI:function(){__cov_6VGNSSk1cR4HRmg75z6u1w.f['4']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['7']++;var instance=this,contentBox=instance.get(ATTR_CONTENTBOX);},syncUI:function(){__cov_6VGNSSk1cR4HRmg75z6u1w.f['5']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['8']++;var instance=this,contentBox=instance.get(ATTR_CONTENTBOX);__cov_6VGNSSk1cR4HRmg75z6u1w.s['9']++;instance.retrieveData();},renderChilds:function(data){__cov_6VGNSSk1cR4HRmg75z6u1w.f['6']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['10']++;var instance=this,contentBox=instance.get(ATTR_CONTENTBOX),itemsContainer=contentBox.one('.list-group'),childWidget,childs=data.results;__cov_6VGNSSk1cR4HRmg75z6u1w.s['11']++;Y.each(childs,function(item){__cov_6VGNSSk1cR4HRmg75z6u1w.f['7']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['12']++;childWidget=new Y.LAbr.Item(item);__cov_6VGNSSk1cR4HRmg75z6u1w.s['13']++;instance.add(childWidget);__cov_6VGNSSk1cR4HRmg75z6u1w.s['14']++;itemsContainer.appendChild(childWidget.render());});__cov_6VGNSSk1cR4HRmg75z6u1w.s['15']++;itemsContainer.one('.loader').addClass('hidden');},retrieveData:function(){__cov_6VGNSSk1cR4HRmg75z6u1w.f['8']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['16']++;var instance=this,dataRetrieve=instance.get('dataRetrieve'),statement=['select * from local.search'+' where query="',dataRetrieve.query,'" and location="',dataRetrieve.location,'"',' | sort(field="Distance", descending="false",field="Rating.AverageRating", descending="true")','| truncate(count='+dataRetrieve.count+')'].join(''),data;__cov_6VGNSSk1cR4HRmg75z6u1w.s['17']++;Y.YQL(statement,{allowCache:false,timeout:9000,on:{success:function(r){__cov_6VGNSSk1cR4HRmg75z6u1w.f['9']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['18']++;data=instance.parseData(r);__cov_6VGNSSk1cR4HRmg75z6u1w.s['19']++;instance.renderChilds(data);},failure:function(r){__cov_6VGNSSk1cR4HRmg75z6u1w.f['10']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['20']++;console.log(r);}}});},filterItems:function(query){__cov_6VGNSSk1cR4HRmg75z6u1w.f['11']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['21']++;var instance=this,size=instance.size(),i=0;__cov_6VGNSSk1cR4HRmg75z6u1w.s['22']++;for(var i=0;i<size;i++){__cov_6VGNSSk1cR4HRmg75z6u1w.s['23']++;instance.item(i).applyFilter(query);};},parseData:function(data){__cov_6VGNSSk1cR4HRmg75z6u1w.f['12']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['24']++;var dataOut,schema={resultListLocator:'query.results.Result',resultFields:[{key:'title',locator:'Title'},{key:'phone',locator:'Phone'},{key:'address',locator:'Address'},{key:'categories',locator:'Categories.Category',parser:function(val){__cov_6VGNSSk1cR4HRmg75z6u1w.f['13']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['25']++;var result='';__cov_6VGNSSk1cR4HRmg75z6u1w.s['26']++;Y.each(val,function(item){__cov_6VGNSSk1cR4HRmg75z6u1w.f['14']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['27']++;result+=item.content+', ';});__cov_6VGNSSk1cR4HRmg75z6u1w.s['28']++;return result;}},{key:'distance',locator:'Distance',parser:function(val){__cov_6VGNSSk1cR4HRmg75z6u1w.f['15']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['29']++;return val+' millas';}},{key:'rating',locator:'Rating.AverageRating',parser:function(val){__cov_6VGNSSk1cR4HRmg75z6u1w.f['16']++;__cov_6VGNSSk1cR4HRmg75z6u1w.s['30']++;return isNaN(val)?(__cov_6VGNSSk1cR4HRmg75z6u1w.b['1'][0]++,-1):(__cov_6VGNSSk1cR4HRmg75z6u1w.b['1'][1]++,+val);}}]};__cov_6VGNSSk1cR4HRmg75z6u1w.s['31']++;dataOut=Y.DataSchema.JSON.apply(schema,data);__cov_6VGNSSk1cR4HRmg75z6u1w.s['32']++;return dataOut;}},{ATTRS:{tittle:{value:'American Restaurants'},dataRetrieve:{value:{location:'los angeles, ca',query:'burger'}}}});__cov_6VGNSSk1cR4HRmg75z6u1w.s['33']++;Y.LAbr.Container=MyContainer;},'@VERSION@',{'requires':['widget','yql','dataschema-json','widget-parent','labr-view-item'],'skinnable':true});
