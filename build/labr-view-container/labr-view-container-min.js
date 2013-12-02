YUI.add("labr-view-container",function(e,t){e.namespace("LAbr");var n="contentBox",r=e.Base.create("labr-view-container",e.Widget,[e.WidgetParent],{initializer:function(){},CONTENT_TEMPLATE:'<div class="panel panel-default"><div class="panel-heading"><div class="drag-icon pull-left"></div><span class="tittle">Japanese Restaurants</span></div><ul class="list-group"><li class="list-group-item loader"></li></ul></div>',renderUI:function(){var e=this,t=e.get(n);t.one("span.tittle").set("innerHTML",e.get("tittle"))},syncUI:function(){this.retrieveData()},renderChilds:function(t){var r=this,i=r.get(n),s=i.one("ul"),o,u=t.results;e.each(u,function(t){o=(new e.LAbr.Item(t)).render(s),r.add(o)}),s.one(".loader").addClass("hidden")},retrieveData:function(){var t=this,n=t.get("dataRetrieve"),r=['select * from local.search where query="',n.query,'" and location="',n.location,'"',' | sort(field="Distance", descending="false",field="Rating.AverageRating", descending="true")',"| truncate(count="+n.count+")"].join(""),i;e.YQL(r,{allowCache:!1,timeout:9e4,on:{success:function(e){i=t.parseData(e),t.renderChilds(i)},failure:function(e){}}})},filterItems:function(e){var t=this,n=t.size(),r=0;for(r;r<n;r++)t.item(r).applyFilter(e)},parseData:function(t){var n,r={resultListLocator:"query.results.Result",resultFields:[{key:"title",locator:"Title"},{key:"phone",locator:"Phone"},{key:"address",locator:"Address"},{key:"categories",locator:"Categories.Category",parser:function(t){var n="";return e.each(t,function(e){n+=e.content+", "}),n}},{key:"distance",locator:"Distance",parser:function(e){return e+" miles"}},{key:"latitude",locator:"Latitude"},{key:"longitude",locator:"Longitude"},{key:"rating",locator:"Rating.AverageRating",parser:function(e){return isNaN(e)?-1:+e}},{key:"latestReview",locator:"Rating.LastReviewIntro"},{key:"city",locator:"City"},{key:"state",locator:"State"}]};return n=e.DataSchema.JSON.apply(r,t),n}},{ATTRS:{tittle:{value:"American Restaurants"},dataRetrieve:{value:{location:"los angeles, ca",query:"burger"}}}});e.LAbr.Container=r},"@VERSION@",{requires:["widget","yql","dataschema-json","widget-parent","labr-view-item"],skinnable:!0});
