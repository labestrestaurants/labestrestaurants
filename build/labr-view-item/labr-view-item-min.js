YUI.add("labr-view-item",function(e,t){e.namespace("LAbr");var n="contentBox",r="boundingBox",i=e.Base.create("labr-view-item",e.Widget,[e.WidgetChild],{initializer:function(e){var t=this;t._publishEvents()},_publishEvents:function(){var e=this;e.publish("openitem",{emitFacade:!0,broadcast:1})},BOUNDING_TEMPLATE:'<li class="list-group-item"></li>',CONTENT_TEMPLATE:'<div class="item-icon pull-left"></div><h5 class="list-group-item-heading"><span>Tros Burgers</span><div class= "item-rating pull-right" ><span class="glyphicon glyphicon-star"></span></div></h5><div><span class="list-group-item-text categories">Fast Food, Restaurant Food</span><span class="list-group-item-text distance pull-right">0.4 millas</span><div class="clearfix"></div></div>',renderUI:function(){var e=this,t=e.get(r),n=t.getComputedStyle("height");n=parseInt(n.substring(0,n.length-2)),e.set("heightX",n)},bindUI:function(){var e=this,t=e.get(r),n;t.on("click",function(t){n={event:t,address:e.get("address"),phone:e.get("phone"),title:e.get("title"),latitude:e.get("latitude"),longitude:e.get("longitude"),city:e.get("city"),state:e.get("state"),latestReview:e.get("latestReview")},e.fire("openitem",{data:n}),t.stopPropagation()})},syncUI:function(){var e=this,t=e.get(r);t.one(".list-group-item-heading span").set("innerHTML",e.get("title")),t.one("span.categories").set("innerHTML",e.get("categories")),t.one("span.distance").set("innerHTML",e.get("distance")),e.syncRating()},applyFilter:function(t){var n=this,i=n.get(r),s=n.get("categories"),o=0,u=[],a,f,l=[];t===""?(i.one("span.categories").set("innerHTML",s),i.replaceClass("hidden","show")):(u=t.split(","),e.each(u,function(t){o=e.AutoCompleteFilters.subWordMatch(t,[{text:s}]).length,o&&l.push(t)}),o?(f=e.Highlight.all(s,l),i.one("span.categories").set("innerHTML",f)):i.replaceClass("show","hidden"))},syncRating:function(){var e=this,t=e.get(r),n=e.get("rating"),i=1,s='<span class="glyphicon glyphicon-star"></span>',o="";n>0&&(n=Math.round(n));for(i;i<=5;i++)i<n?o="glyphicon-star":o="glyphicon-star-empty",s+='<span class="glyphicon '+o+'"></span>';t.one(".item-rating").set("innerHTML",s)}},{ATTRS:{address:{value:""},city:{value:""},state:{value:""},phone:{value:""},distance:{value:""},rating:{value:""},latestReview:{value:""},title:{value:""},categories:{value:""},latitude:{value:""},longitude:{value:""},heightX:{value:""}}});e.LAbr.Item=i},"@VERSION@",{requires:["widget","widget-child","highlight","autocomplete-filters"],skinnable:!0});
