	//Tabulations
$(document).ready(function() {
	let titre = $('.category-title');
	let card = titre.next();

	card.hide();

	titre.on('click', function() {
		card.hide();
		$(this).next().fadeIn(500);
	});

 	//Le dropdown qui fait plaisir
	let avatar = $('.avatar');
	let menu = $('.dropdown-content');

	menu.hide();

	avatar.on('click', function() {
		menu.toggle();
	});

	//Modales de connexion/inscription
	let signup_modal = $('#signup');
	let body = $('body');
	
	btn_signup = $('#btn-signup');
	btn_signup.on('click', function(event) {
		event.preventDefault();
		signup_modal.fadeIn(1000);

		event.stopPropagation();
	});

	body.on('click', function() {
		signup_modal.fadeOut(1000);
	});
});