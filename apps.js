var aapps = [
	{
		"id": "example",
		"dev": "IANA",
		"link": "https://www.example.com",
		"name": "Example",
		"description": "An example app to demonstrate the possibilities of the store.",
		"reward": 5
	},
	{
		"id": "youtube",
		"dev": "Google",
		"link": "https://www.youtube.com",
		"name": "YouTube",
		"description": "YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$ 1.65 billion. (Wikipedia)",
		"reward": 5
	},
	{
		"id": "google",
		"dev": "Google",
		"link": "https://www.google.com",
		"name": "Google",
		"description": "Google Search, or simply Google, is a web search engine developed by Google LLC. It is the most used search engine on the World Wide Web across all platforms, with 92.62% market share as of June 2019,[4] handling more than 5.4 billion searches each day. (Wikipedia)",
		"reward": 5
	},
	{
		"id": "wikip",
		"dev": "Wikimedia Fnd.",
		"link": "https://en.wikipedia.org",
		"name": "Wikipedia",
		"description": "Free encyclopedia.",
		"reward": 5
	},
	{
		"id": "amazon",
		"dev": "Amazon",
		"link": "https://www.amazon.com",
		"name": "Amazon",
		"description": "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.",
		"reward": 5
	},
	{
		"id": "reddit",
		"dev": "Advance Pbc.",
		"link": "https://www.reddit.com",
		"name": "Reddit",
		"description": "Reddit is an American social news aggregation, web content rating, and discussion website.",
		"reward": 5
	},
	{
		"id": "twitter",
		"dev": "Twitter (?)",
		"link": "https://www.twitter.com",
		"name": "Twitter",
		"description": "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets. Tweets can be up to 140 characters long and can include links to relevant websites and resources. (UKRI)",
		"reward": 5
	}
];



//////////////////////////////////////////////////////////



for(var i = 0; i < aapps.length; i++){
	$("body").append('<card><img src="/apps/' + aapps[i].id + '/icon.png" width="100" height="100" style="position: block; cursor: auto"><h1>' + aapps[i].name + '<br>By ' + aapps[i].dev + '<br><a href="/apps/' + aapps[i].id + '/app.html">Show details</a></h1></card><br>');
}
