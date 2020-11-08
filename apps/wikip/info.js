var appi = {
	"id": "wikip",
	"dev": "Wikimedia Fnd.",
	"link": "https://en.wikipedia.org",
	"name": "Wikipedia",
	"description": "Free encyclopedia.",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
