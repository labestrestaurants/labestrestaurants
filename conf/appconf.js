APP_config = {
	test_data : '{"query":{"count":2,"created":"2013-11-30T19:16:35Z","lang":"es","results":{"Result":[{"id":"20398497","xmlns":"urn:yahoo:lcl","Title":"Troy\'s Burgers","Address":"4805 Valley Blvd","City":"Los Angeles","State":"CA","Phone":"(323) 225-2510","Latitude":"34.066651","Longitude":"-118.179901","Rating":{"AverageRating":"5","TotalRatings":"5","TotalReviews":"5","LastReviewDate":"1256867378","LastReviewIntro":" Awesome food, burgers that WILL FILL YOU UP. Great people and great service.I have recommended this fast food location to my friends and family. We visit this location at least once or twice a week.Come hungry leave satisfied, thats no lie!!!!"},"Distance":"3.86","Url":"http://local.yahoo.com/info-20398497-troy-s-burgers-los-angeles","ClickUrl":"http://local.yahoo.com/info-20398497-troy-s-burgers-los-angeles","MapUrl":"http://local.yahoo.com/info-20398497-troy-s-burgers-los-angeles?viewtype=map","BusinessUrl":null,"BusinessClickUrl":null,"Categories":{"Category":[{"id":"96926242","content":"Fast Food"},{"id":"96926157","content":"Burgers"},{"id":"96926236","content":"Restaurants"}]}},{"id":"20407528","xmlns":"urn:yahoo:lcl","Title":"Juicy Burger","Address":"1820 N Vermont Ave","City":"Los Angeles","State":"CA","Phone":"(323) 660-1211","Latitude":"34.104215","Longitude":"-118.291649","Rating":{"AverageRating":"5","TotalRatings":"3","TotalReviews":"3","LastReviewDate":"1217295113","LastReviewIntro":" This place is great! Low cost, tasty Japanese food. Funky and fun, cash only but no problem, most items on the menu are around $4-6. Been going here for years amd love it. Hands down better than the more expensive Niko Niko down the block"},"Distance":"4.40","Url":"http://local.yahoo.com/info-20407528-juicy-burger-los-angeles","ClickUrl":"http://local.yahoo.com/info-20407528-juicy-burger-los-angeles","MapUrl":"http://local.yahoo.com/info-20407528-juicy-burger-los-angeles?viewtype=map","BusinessUrl":"http://www.juicyburgeronline.com/","BusinessClickUrl":"http://www.juicyburgeronline.com/","Categories":{"Category":[{"id":"96926157","content":"Burgers"},{"id":"96926236","content":"Restaurants"}]}}]}}}',
	categories: [
			{
				name: 'American',
				tittle: 'Americans Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'burger',
						count:5
				}				
			},
			{
				name: 'Japanese',
				tittle: 'Japanese Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'japanese',
						count:10
				}				
			},
			{
				name: 'Korean',
				tittle: 'Korean Restaurants',
				dataRetrieve: {
						location: 'los angeles, ca',
						query: 'korean',
						count:3
				}				
			}
		]
};