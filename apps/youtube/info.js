var appi = {
	"id": "youtube",
	"dev": "Google",
	"link": "https://www.youtube.com",
	"name": "YouTube",
	"description": "YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$ 1.65 billion. (Wikipedia)",
	"reward": 5
}



//////////////////////////////////////////////////////////



var installC = function(){
	if(JSON.parse(Cookies.get("apps")).includes(appi.id)) return;
	if(appi.reward < 0 && -(appi.reward) > Number(Cookies.get("balance"))){
		alert("Not enough points! You can get points by installing free apps.");
		return;
	}
	Cookies.set("apps", JSON.stringify(JSON.parse(Cookies.get("apps")).concat([appi.id])));
	Cookies.set(appi.id, JSON.stringify(appi));
	setTimeout(function(){
		new Notification("MilkApps", {"icon": "icon.png", "body": appi.name + " successfully installed! Click here to open."}).onclick = tryC;
	}, 0);
	Cookies.set("actions", JSON.stringify(JSON.parse(Cookies.get("actions")).concat(["Installed " + appi.name])));
	if(JSON.parse(Cookies.get("gotbonus")).includes(appi.id)) return;
	Cookies.set("balance", Number(Cookies.get("balance")) + appi.reward);
	Cookies.set("gotbonus", JSON.stringify(JSON.parse(Cookies.get("gotbonus")).concat([appi.id])));
	playsound("/resources/audio/install_custom.wav");
}
var tryC = function(){
	window.open(appi.link, "", "width=800,height=600,top=100,left=100,menubar=no,toolbar=no,location=no,status=no");
	playsound("/resources/audio/try.wav");
}
$("#name").text(appi.name);
$("#dev").text("by " + appi.dev);
$("#description").text(appi.description);
if(appi.reward < 0) $("#reward").text("You'll spend " + -appi.reward + " points");
else $("#reward").text("You'll gain " + appi.reward + " points");
$("#id").text("ID: " + appi.id);