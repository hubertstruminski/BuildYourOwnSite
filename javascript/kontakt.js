window.onload = function()
{
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