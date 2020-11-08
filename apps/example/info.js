var appi = {
	"id": "example",
	"dev": "IANA",
	"link": "https://www.example.com",
	"name": "Example",
	"description": "An example app to demonstrate the possibilities of the store.",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
