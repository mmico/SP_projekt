var username;
var pass;
var account=document.getElementById("account");

function login(){
	username=document.getElementById("usernamel").value;
	pass=document.getElementById("geslol").value;
	if(username=="mmico"&&pass=="htmljscss"){
		logined=true;
		document.getElementById("napaka").innerHTML="";
		window.history.back();
	}
	else{
		document.getElementById("napaka").innerHTML="Napacno uporabnisko ime ali geslo!";
	}
}

/*function accinfo(){
	if(logined)
		account.innerHTML="Prijavljeni ste kot "+username+". <a href='index.html'>Odjava</a>";
	else
		account.innerHTML="Niste prijavljeni. <a href='login.html'>Login</a>/<a href='registration.html'>Registration</a>";
}*/