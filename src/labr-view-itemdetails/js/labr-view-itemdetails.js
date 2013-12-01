Y.namespace('LAbr');

var ATTR_CONTENTBOX = 'contentBox',
	ATTR_BOUNDINGBOX = 'boundingBox',

	MyItemDetails = Y.Base.create("labr-view-itemdetails", Y.Widget, [], {

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

		/**
		 * Description
		 * @method _publishEvents
		 * @return 
		 */
		_publishEvents: function () {
			var instance = this;
			instance.publish('closeitem', {
				emitFacade: true,
				broadcast: 1
			});
		},

		BOUNDING_TEMPLATE: '<div class="popover fade bottom in"></div>',
		CONTENT_TEMPLATE: '<div class="arrow"></div>' + '<h3 class="popover-title item-details-title title">Juicy Burger</h3>' + '<div class="popover-content item-details-content">' + '<div class="row">' + '<div class="col-md-7 col-xs-7 item-details-hero">' + '</div>' + '<div class="col-md-5 col-xs-5 item-details-subdetails">' + '</div>' + '</div>' + '<div class="row item-details-subdetails-hidden hidden">' + '</div>' + '</div>',


		/**
		 * Description
		 * @method renderUI
		 * @return 
		 */
		renderUI: function () {
			var instance = this,
				contentBox = instance.get(ATTR_CONTENTBOX),
				boundingBox = instance.get(ATTR_BOUNDINGBOX),
				styles = instance.get('styles'),
				subdetails = instance.get('subdetails'),
				subdetailsNode = boundingBox.one('.item-details-subdetails'),
				subdetailNode, hiddenSubDetails = instance.get('hiddenSubDetails'),
				hiddenSubDetailsNode = boundingBox.one('.item-details-subdetails-hidden');

			if (styles) {
				boundingBox.setStyles(styles);
			}

			//title
			boundingBox.one('.item-details-title').set('innerHTML', instance.get('title'));

			//hero
			boundingBox.one('.item-details-hero').appendChild(instance.get('hero'));

			//subdetails
			Y.each(subdetails, function (item, key) {
				htmlTemp = ['<p class="item-subdetail', key, '">', item.html, '</p>'].join('');
				subdetailNode = Y.Node.create(htmlTemp, subdetailsNode);
				subdetailsNode.appendChild(subdetailNode);
				if (item.trigger) {
					instance.bindTrigger(subdetailNode, item.trigger);
				}
			});

			//hiddensubdetails
			htmlTemp = '';
			Y.each(hiddenSubDetails, function (item) {
				htmlTemp = [htmlTemp, '<p>', item.html, '</p>'].join('');
				//subdetailNode = subdetailsNode.create(htmlTemp);
			});

			hiddenSubDetailsNode.set('innerHTML', htmlTemp);
		},

		/**
		 * Description
		 * @method bindUI
		 * @return 
		 */
		bindUI: function () {
			var instance = this,
				boundingBox = instance.get(ATTR_BOUNDINGBOX);

			boundingBox.on('clickoutside', function (e) {
				boundingBox.addClass('hidden');
				instance.fire('closeitem');
			});
		},

		/**
		 * Description
		 * @method syncUI
		 * @return 
		 */
		syncUI: function () {
			var instance = this,
				boundingBox = instance.get(ATTR_BOUNDINGBOX);
		},

		/**
		 * Description
		 * @method bindTrigger
		 * @param {} node
		 * @param {} trigger
		 * @return 
		 */
		bindTrigger: function (node, trigger) {
			//TODO: Could be dinamically
			var instance = this;
			node.on(trigger, instance.showHiddenSubDetails, instance);
		},

		/**
		 * Description
		 * @method showHiddenSubDetails
		 * @param {} e
		 * @return 
		 */
		showHiddenSubDetails: function (e) {
			var instance = this,
				boundingBox = instance.get(ATTR_BOUNDINGBOX);

			boundingBox.one('.item-details-subdetails-hidden').replaceClass('hidden', 'show');
		},
		/**
		 * Description
		 * @method syncData
		 * @param {} data
		 * @return 
		 */
		syncData: function (data) {
			var instance = this,
				boundingBox = instance.get(ATTR_BOUNDINGBOX),
				node, selector;

			Y.each(data, function (item, key) {
				selector = '.' + key;
				node = boundingBox.one(selector);
				if (node) {
					node.set('innerHTML', item);
				}
			});
		}

	}, {
		ATTRS: {
			title: {
				value: ''
			},
			styles: {
				value: {}
			},
			hero: {

			},
			subdetails: {
				value: []
			},
			hiddenSubDetails: {
				value: []
			}
		}

	});

Y.LAbr.ItemDetails = MyItemDetails;