var appi = {
	"id": "twitter",
	"dev": "Twitter (?)",
	"link": "https://www.twitter.com",
	"name": "Twitter",
	"description": "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets. Tweets can be up to 140 characters long and can include links to relevant websites and resources. (UKRI)",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
