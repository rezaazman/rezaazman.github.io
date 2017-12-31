function signin(username, password){
	if (username === "admin" && password === "admin") {
		alert("Sign In Success. Redirect to Home.")
		window.location = "index.html";
	}
	else {
		alert("Invalid username or password.")
	}
}

var map;
function initMap() {
	var uluru = {lat: -6.896476, lng: 107.613813};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}


$(document).ready(function(){
    $('#ul-none li').hover(function() {
        $(this).animate({ paddingLeft: '20px', color : '#111'}, 150);
    }, function() {
        $(this).animate({ paddingLeft: '0px', color : '#fff' }, 150);
    });     
});