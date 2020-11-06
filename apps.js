var aapps = [
	{
		"id": "example",
		"dev": "IANA",
		"link": "https://www.example.com",
		"name": "Example",
		"description": "An example app to demonstrate the possibilities of the store.",
		"reward": 5
	}
];



//////////////////////////////////////////////////////////



for(var i = 0; i < aapps.length; i++){
	$("body").append('<card><img src="/apps/' + aapps[i].id + '/icon.png" width="100" height="100" style="position: block; cursor: auto"><h1>' + aapps[i].name + '<br>By ' + aapps[i].dev + '<br><a href="/apps/' + aapps[i].id + '/app.html">Show details</a></h1></card><br>');
}
