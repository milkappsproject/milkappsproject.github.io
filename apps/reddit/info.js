var appi = {
	"id": "reddit",
	"dev": "Advance Pbc.",
	"link": "https://www.reddit.com",
	"name": "Reddit",
	"description": "Reddit is an American social news aggregation, web content rating, and discussion website.",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
