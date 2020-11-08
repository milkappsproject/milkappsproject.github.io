var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}
var appi = {
	"id": urlParam("id"),
	"dev": urlParam("dev"),
	"link": urlParam("link"),
	"name": urlParam("name"),
	"description": urlParam("description").replace(/%20/gi, " "),
	"reward": Number(urlParam("reward"))
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
		new Notification("MilkApps", {"icon": "/apps/" + appi.id + "/icon.png", "body": appi.name + " successfully installed! Click here to open."}).onclick = tryC;
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
$("#icon").attr("src", "/apps/" + appi.id + "/icon.png");
