var appi = {
	"id": "youtube",
	"dev": "Google",
	"link": "https://www.youtube.com",
	"name": "YouTube",
	"description": "YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees - Chad Hurley, Steve Chen, and Jawed Karim - created the service in February 2005. Google bought the site in November 2006 for US$ 1.65 billion. (Wikipedia)",
	"reward": 5
}



//////////////////////////////////////////////////////////



$("iframe").attr("src", "/etc/appinfo/index.html?id=" + appi.id + "&dev=" + appi.dev + "&link=" + appi.link + "&name=" + appi.name + "&description=" + appi.description + "&reward=" + appi.reward);
