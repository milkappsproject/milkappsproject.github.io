if(Cookies.get("balance") == undefined) Cookies.set("balance", "0");
if(Cookies.get("gotbonus") == undefined) Cookies.set("gotbonus", "[]");
if(Cookies.get("actions") == undefined) Cookies.set("actions", "[]");
urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}
if(Cookies.get("aP") == undefined) Cookies.set("aP", "no");
setInterval(function(){
	if(Notification.permission == "denied" && Cookies.get("aP") == "yes"){
		Notification.requestPermission();
		Cookies.set("aP", "no");
	}
	$("hint span").text("Balance: " + Cookies.get("balance") + " points.");
}, 200);
if(urlParam("open")) $("#content").attr("src", urlParam("open"));
if(urlParam("app")) $("#content").attr("src", "/apps/" + urlParam("app") + "/app.html");
$("sidebar").animate({"left": "0"}, 1000);
function showBal(){
	$("hint").css("display", "block");
	$("hint").animate({"opacity": "1"}, 500);
	setTimeout(function(){
		$("hint").animate({"opacity": "0"}, 500, complete = function(){
			$("hint").css("display", "none");
		});
	}, 2000);
}
setInterval(function(){
	try{
		Cookies.remove(JSON.stringify({"id":"","url":"","dev":"LOCAL","description":"","name":"","reward":"0"}));
	}catch(e){}
}, 500);
