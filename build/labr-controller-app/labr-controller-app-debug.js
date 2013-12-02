YUI.add('labr-controller-app', function (Y, NAME) {

Y.namespace('LAbr');

//shorthands
var BOUNDING_BOX = 'boundingBox',
	PANELS_CONTAINER = '.panels-container',
	APP_CONTAINER = '.app-container',
	HIDDEN = 'hidden',
	DISABLE = 'disable',

	MyAppController = Y.Base.create('labr-controller-app', Y.Base, [], {

		initializer: function () {
		},

		/**
		 * Description
		 * @method showRestaurantCategoriesAction
		 * @param {} categories
		 * @return 
		 */
		showRestaurantCategoriesAction: function (categories) {
			var instance = this,
				views = Y.LAbr.App.CategoriesViews;
			Y.each(categories, function (item) {
				views[item.name] = new Y.LAbr.Container(item).render(PANELS_CONTAINER);
			});
			instance.DDCategories();
		},

		/**
		 * Description
		 * @method DDCategories
		 * @return 
		 */
		DDCategories: function () {
			var dragConfig = {
				draggableElements: Y.Node.all('.panel'),
				constrain2node: PANELS_CONTAINER,
				handle: '.drag-icon',
				dragElementClassName: 'panel'
			},
			dragBehavior = new Y.LAbr.DDBehavior(dragConfig);
		},

		/**
		 * Description
		 * @method filterItems
		 * @param {} query
		 * @return 
		 */
		filterItems: function (query) {
			var categories = Y.LAbr.App.CategoriesViews;
			Y.each(categories, function (item) {
				item.filterItems(query);
			});
		},

		/**
		 * Description
		 * @method restaurantShowDetailAction
		 * @param {} e
		 * @return 
		 */
		restaurantShowDetailAction: function (e) {
			var instance = this,
				restaurantItemData = e.data,
				currentItemWidget = e.currentTarget,
				currentItemBoundingBox = currentItemWidget.get(BOUNDING_BOX),
				itemDetailInstance = Y.LAbr.App.ItemDetails,
				itemDetailBoundingBox;

			restaurantItemData.styles = {
				top: currentItemBoundingBox.getY() + currentItemWidget.get('heightX'),
				left: currentItemBoundingBox.getX(),
				display: 'block'
			};

			Y.one('.mask-inside').removeClass(HIDDEN);
			Y.one(APP_CONTAINER).addClass(DISABLE);

			if (itemDetailInstance) {
				itemDetailBoundingBox = itemDetailInstance.get(BOUNDING_BOX);
				itemDetailInstance.syncData(restaurantItemData);
				itemDetailBoundingBox.removeClass(HIDDEN);
				itemDetailBoundingBox.setStyles(restaurantItemData.styles);
			} else {
				instance.createRestaurantItemDetail(restaurantItemData);
			}
			instance.syncPlace([restaurantItemData.latitude, restaurantItemData.longitude], restaurantItemData.title);
		},

		/**
		 * Description
		 * @method createRestaurantItemDetail
		 * @param {} restaurantItem
		 * @return 
		 */
		createRestaurantItemDetail: function (restaurantItem) {
			var ItemDetails = {
				title: restaurantItem.title,
				styles: restaurantItem.styles,
				//HTML Node
				hero: Y.Node.create('<div id="map_canvas"></div>'),
				subdetails: [{
					html: ['<strong>Address</strong><br><span class="address">', restaurantItem.address, '</span><br><span class="state">', restaurantItem.state, '</span>,<span class="city">', restaurantItem.city, '</span>'].join('')
				}, {
					html: ['<strong>Phone</strong><br><span class="phone">', restaurantItem.phone, '</span>'].join('')
				}, {
					html: ['<span class="item-details-subdetails-trigger">', '<span class="glyphicon glyphicon-user"></span>', '<img src="assets/images/bubbles.png">', '</span>'].join(''),
					trigger: 'click'
				}],
				hiddenSubDetails: [{
					html: ['<div class="col-md-12">', '<strong>Last Review</strong><br>', '<h6>', '<em class="latestReview">', restaurantItem.latestReview, '</em>', '</h6>', '</div>'].join('')
				}]

			};

			Y.LAbr.App.ItemDetails = new Y.LAbr.ItemDetails(ItemDetails).render('body');
		},

		/**
		 * Description
		 * @method hideRestaurantDetailAction
		 * @param {} e
		 * @return 
		 */
		hideRestaurantDetailAction: function (e) {
			Y.one('.mask-inside').addClass(HIDDEN);
			Y.one(APP_CONTAINER).removeClass(DISABLE);
		},

		/**
		 * Description
		 * @method syncPlace
		 * @param {} latLngValue
		 * @param {} placeName
		 * @return 
		 */
		syncPlace: function (latLngValue, placeName) {
			if (Y.LAbr.App.Maps) {
				var appMaps = Y.LAbr.App.Maps,
					map = appMaps.map,
					googleMaps = google.maps,
					myLatlng = new googleMaps.LatLng(latLngValue[0], latLngValue[1]),
					mapOptions = {
						center: myLatlng,
						zoom: 17,
						mapTypeId: googleMaps.MapTypeId.ROADMAP
					}, marker = appMaps.marker;

				if (!map) {
					map = new googleMaps.Map(document.getElementById('map_canvas'), mapOptions);
					marker = new googleMaps.Marker({
						position: myLatlng,
						map: map,
						animation: googleMaps.Animation.DROP,
						title: placeName
					});

					appMaps.marker = marker;
					appMaps.map = map;
				} else {
					map.setCenter(myLatlng);
					map.setZoom(17);
					marker.setMap(null);
					marker = new googleMaps.Marker({
						position: myLatlng,
						map: map,
						animation: googleMaps.Animation.DROP,
						title: placeName
					});
				}
			}
		}

	}, {
		ATTRS: {

		}

	});

Y.LAbr.AppController = MyAppController;

}, '@VERSION@', {"requires": ["yui-base"]});
