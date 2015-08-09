function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult');
	} else if (userAge >=13) {
		console.log('User is a teenager');
	} else {
		console.log('Go away child!');
	}

	/*
		If the user's first name is 'General' and 
		and the last name is NOT 'Assembly', then
		greet the General!
	*/

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !=='assembly') {
			console.log('Greetings General ' + lastName + '!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h2').css('background-color', faveColour);
	}
}






// When the page has loaded 
$(function() {

	//Ask questions only when user clicks on image
	$('img').on('click', askQuestions);

	//Get all the sections
	var sections = $('h3').next();

	//Hide all the sections
	sections.hide();

	//When the user clicks an h3
	$('h3').on('click', function(){

		//Remember the section user wants to see
		var thisSection = $(this).next();

		// Hide all the sections except the one the user wants to see
		sections.not(thisSection).slideUp(500);

		//Toggle the one the user wants to see
		thisSection.slideToggle(500);



	});





});
