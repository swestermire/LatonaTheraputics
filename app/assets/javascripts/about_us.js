// DOM MANIPULATION (Document Object Model)
// document object is a special obj that represents your entire HTML document (or document object model)
// The purpose of document is to gain access to individual elements in our HTML model/ webpage

//ex: console.log(document.getElementById("title"));

document.addEventListener("DOMContentLoaded", function(event){

	function displayBio(event){
	var target_id = event.target.id;
	console.log("event is " , target_id);
	
	function updateContent(message, content_id) {
		console.log('update function content worked ' + message);
		document.querySelector(content_id).innerHTML = "<h2>"+message +"</h2>";
	};
	
	if (target_id == "person1"){
		
		console.log("target_id check " + target_id);
		
		
		$ajaxUtils.sendGetRequest("/about_us.json",
		
		function (request) {
			console.log('CONSOLE: ' + request.person1.firstName + ' ' +
			 request.person1.lastName + ' of ' + request.person1.age + ' loves to eat ' +
			 request.person1.favoriteFood);
			
			bio = request.person1.firstName + " loves to eat " + request.person1.favoriteFood;
			updateContent(bio, '#persons_bio');
			//document.querySelector("#persons_bio").textContent = bio;
			
		}
	);
			
	}
	
	else if (target_id == "person2"){
		
		console.log("Meng-Yang Chen was clicked");
		
		$ajaxUtils.sendGetRequest("/about_us.json",
		
		function (request) {
			console.log("request is " + request.mengYangChen.info);
			
			bio = request.mengYangChen.info;
			updateContent(bio, '#persons_bio');
		},
		
		true
		);
}
	
	else if (target_id == "person3"){
		var bio = "Person 3 was clicked";
	} else {
		var bio = "General Biography";
	};
	
	//Setting or getting content from a specific element in html page
	//document.getElementById("persons_bio").textContent = bio; 
	//or
	//document.getElementById("persons_bio").innerHTML = bio;)
	// or
	// var title = document.querySelector("#title")
	
	console.log('BIO: ' + bio);
	document.querySelector("#persons_bio").textContent = bio;
	}

	//document.querySelector("#person1").addEventListener("click", displayBio);
	//console.log("this kinda works?");
	// document.querySelector("#person1").onclick = displayBio;
	
	// Unobstrusive event binding
	console.log("about_us.js (personal JS) was read");
	document.querySelector("#persons").addEventListener("click", displayBio);
	}
);

$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
  });
 
});