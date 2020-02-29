$(document).ready(function() {

	// Adding a Body Class enable JavaScript.

	$("body").addClass("js");

	// Become part of the story by pressing LET'S GO submission in form element.

	$("form").submit(function(event) {

		var Nickname = $("#Nickname").val();// Variable is stored as nickname.
		var complete = false; // Default not complete.

		console.log(Nickname);// Print 'Nickname' in the box when not complete.

		if(Nickname != "") { // Completed when there is something enters in the form.
			complete = true;
		}

		if(complete) {
			$(".name").html(Nickname); // Updated the variable to each Name Class when completed.
		}
		event.preventDefault();

	});
	
	
	$('figure').scrollClass();// Call the function to apply to the figure elements.
	  


});