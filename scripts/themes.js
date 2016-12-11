function load(){
	var t=location.search.split('t=')[1];
	//console.log(t);
	switch (t){
		case '1': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=1'>C</a>/"
			break;
		case '2': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=2'>C++</a>/"
			break;
		case '3': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=3'>C#</a>/"
			break;
		case '4': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=4'>Java</a>/"
			break;
		case '5': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=5'>Javascript</a>/"
			break;
		case '6': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=6'>HTML</a>/"
			break;
		case '7': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=7'>CSS</a>/"
			break;
		case '8': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=8'>Python</a>/"
			break;
		case '9': 
			document.getElementById("txtpath").innerHTML="<a href='index.html'>home</a>/<a href='theme.html?t=9'>Prolog</a>/"
			break;
		default: break;
	}
}

window.onload=load;
