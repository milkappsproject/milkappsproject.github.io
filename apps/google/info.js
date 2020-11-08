var appi = {
	"id": "google",
	"dev": "Google",
	"link": "https://www.google.com",
	"name": "Google",
	"description": "Google Search, or simply Google, is a web search engine developed by Google LLC. It is the most used search engine on the World Wide Web across all platforms, with 92.62% market share as of June 2019, handling more than 5.4 billion searches each day. (Wikipedia)",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
