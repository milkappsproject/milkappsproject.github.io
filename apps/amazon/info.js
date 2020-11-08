var appi = {
	"id": "amazon",
	"dev": "Amazon",
	"link": "https://www.amazon.com",
	"name": "Amazon",
	"description": "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
