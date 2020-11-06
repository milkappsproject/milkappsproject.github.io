emailjs.init("user_7ZQZarn0OCUZePzpBXrO8");
/*pls don't steal my token
just, don't
I can change the project's email
I'll never get tired, you'll get tired first.
just, don't.*/
var gid = (id) => document.getElementById(id).value;
function go(){
	emailjs.send("service_1l1v4po","requestapp",{
		"name": gid("name"),
		"id": gid("id"),
		"dev": gid("dev"),
		"desc": gid("desc"),
		"url": gid("url"),
		"reward": gid("reward"),
		"email": gid("email"),
		"icon": gid("icon")
	});
	document.write("Ok! The request sent.");
}
