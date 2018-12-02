var btnSend = document.getElementById("btn");
var name = document.getElementById("name");
var surname = document.getElementById("surname");
var email = document.getElementById("email");
var txtArea = document.getElementById("txtarea");

function validateForm()
{
	var regName = /^[A-Z]{1}[a-zA-Z ]{2,}/;
	var regSpace = /[ ]{1,}/;
	var regEmail = /^[a-z0-9]{1,}@[a-z0-9]{1,}\.[a-z0-9]{1,}/;

	if(name.value == "" || surname.value == "" || email.value == "" || txtArea.value == "" ||
		name.value == "Wpisz swoje imię" || surname.value == "Wpisz swoje nazwisko" || email.value == "Podaj swój email" || txtArea.value == "Czym jesteś zainteresowany?"){
		btnSend.disabled = true;
	}else if(!regName.test(name.value) || regSpace.test(name.value)){
		name.style.border = "2px solid red";
		btnSend.disabled = true;
	}else if(!regEmail.test(email.value) || regSpace.test(email.value)){
		email.style.border = "2px solid red";
		btnSend.disabled = true;
	}else{
		btnSend.disabled = false;
	}
}

function switchButton()
{
	if(name.value != "" && email.value != "" && txtArea.value != ""){
		btnSend.disabled = false;
		btnSend.style.backgroundColor = "#c43a3a";
	}
}

function init()
{
	name.value = "";
	surname.value = "";
	email.value = "";
	txtArea.value = "";
}

function enableButton()
{
	btnSend.disabled = true;
	btnSend.style.backgroundColor = "#666";
}

window.onload = function()
{
	init();

	enableButton();
	switchButton();

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



	btnSend.addEventListener("click", function(){
		validateForm();
	});
}