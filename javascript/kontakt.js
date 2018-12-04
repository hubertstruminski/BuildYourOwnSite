var btnSend = document.getElementById("btn");

var count = 1;
function checkName()
{
	count = 0;

	var btnSend = document.getElementById("btn");
	btnSend.setAttribute("disabled", "true");
	
	var name = document.getElementById("name");

	var regName = /^[A-Z]{1}[a-zA-Z ]{2,}/;

	name.style.color = "#666";

	if(name.value == "" || !regName.test(name.value)){
		name.style.border = "5px solid red";
		count++;
	}else if(name.value != "" && regName.test(name.value)){
		name.style.border = "5px solid green";
		count = 0;
	}
}

function checkEmail()
{
	count = 0;

	var btnSend = document.getElementById("btn");
	btnSend.setAttribute("disabled", "true");

	var email = document.getElementById("email");

	var regEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+/;

	email.style.color = "#666";

	if(email.value == "" || !regEmail.test(email.value)){
		email.style.border = "5px solid red";
		count++;
	}else if(email.value != "" && regEmail.test(email.value)){
		email.style.border = "5px solid green";
		count = 0;
	}
}

function checkSurname()
{
	var surname = document.getElementById("surname");

	var btnSend = document.getElementById("btn");
	btnSend.setAttribute("disabled", "true");

	surname.style.color = "#666";
	surname.style.border = "5px solid green";
}

function checkMessage()
{
	count = 0;

	var btnSend = document.getElementById("btn");
	var txtArea = document.getElementById("txtarea");
	var name = document.getElementById("name");
	var surname = document.getElementById("surname");
	var email = document.getElementById("email");

	btnSend.setAttribute("disabled", "true");

	if(txtArea.value == ""){
		txtArea.style.border = "5px solid red";
		count++;
	}else{
		txtArea.style.border = "5px solid green";
		count = 0;
	}

	// if(name.value != "" && email.value != "" && txtArea.value != ""){
	// 	btnSend.style.backgroundColor = "#c43a3a";
	// 	btnSend.removeAttribute("disabled");
	// }

	if(count == 0){
		btnSend.style.backgroundColor = "#c43a3a";
		btnSend.removeAttribute("disabled");
	}
}

function init()
{
	var name = document.getElementById("name");
	var surname = document.getElementById("surname");
	var email = document.getElementById("email");
	var txtArea = document.getElementById("txtarea");
	name.value = "";
	surname.value = "";
	email.value = "";
	txtArea.value = "";
}

function send()
{
	var btnSend = document.getElementById("btn");

	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var txtArea = document.getElementById("txtarea");

}

window.onload = function()
{
	init();

	var ul = document.querySelector("ul");

	var firstLi = document.getElementsByTagName("li")[0];
	var firstLink = document.createElement("a");
	firstLink.setAttribute("href", "index.html");
	ul.appendChild(firstLink);

	var secondLi = document.getElementsByTagName("li")[1];
	var secondLink = document.createElement("a");
	secondLink.setAttribute("href", "oferta.html");
	ul.appendChild(secondLink);

	var thirdLi = document.getElementsByTagName("li")[2];
	var thirdLink = document.createElement("a");
	thirdLink.setAttribute("href", "wypozyczalnia.html");
	ul.appendChild(thirdLink);

	var fourthLi = document.getElementsByTagName("li")[3];
	var fourthLink = document.createElement("a");
	fourthLink.setAttribute("href", "kontakt.html");
	ul.appendChild(fourthLink);



	firstLi.addEventListener("click", function(){
		window.location = firstLink.getAttribute("href");
	});

	secondLi.addEventListener("click", function(){
		window.location = secondLink.getAttribute("href");
	});

	thirdLi.addEventListener("click", function(){
		window.location = thirdLink.getAttribute("href");
	});

	fourthLi.addEventListener("click", function(){
		window.location = fourthLink.getAttribute("href");
	});
}