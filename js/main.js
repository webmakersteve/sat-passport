
$('.answer-link').click(function(e) {
	var questionId = $(this).data('question-id');
	var answerId = $(this).data('answer-id');

	var answers = store.get('answers') || {};
	answers[questionId] = answerId;

	store.set('answers', answers);

	console.log(answers);

});

function markQuizCompleted() {
	store.set('completed', true);
}

function createElement(type, image) {
	var id = type.toLowerCase().replace(' ', '');
	var section = $('<section>').addClass('boxset').attr('id', id);
	var h3 = $('<h3>').html('<span class="cursive">your</span> ' + type + ' <span class="cursive">results</span>');

	var div = $('<div>').addClass('box').addClass('pink-border').addClass('unboxed');
	var img = $('<img>').attr('src', image);

	div.append(img);
	section.append(h3).append(div);

	return section;
}

function loadQuizResults() {
	var answers = store.get('answers');

	var typeAnswer = answers[1] || 1;
	var type;

	switch (typeAnswer) {
		case 1:
			type = 'Students';
			break;
		case 2:
			type = 'Counselors';
			break;
		case 3:
			type = 'Parents';
			break;
	}

	for (var x in answers) {

		if (x == 1 || x == 0) continue;

		var answer = answers[x];
		var s = ( ( x - 2 ) * 3 ) + answer;
		var title;

		switch (parseInt(x)) {
			case 2:
				title = 'Competitiveness';
				break;
			case 3:
				title = 'Study Habits';
				break;
			case 4:
				title = 'Timeline';
				break;
			case 5:
				title = 'Mindset';
				break;
			case 6:
				title = 'Selectivity';
				break;
		}

		var section = createElement( title, '/sat-passport/img/results/Quiz-Results-Blog-Box-'+ type +'-'+ s +'.png' );

		$('#answers-section').append(section);
	}

}

if ($('#answers-section')) {
	loadQuizResults();
}

// signup-modal
var modal = document.getElementById('ouibounce-modal');

if (modal) {

	$('#mc-embedded-subscribe-form').on('submit', function() {

		if ($('.mce_inline_error').length > 0) {} else {
			$('#signup-modal').hide();
		}

	});

	var _ouibounce = ouibounce(modal, {
		callback: function() {
			$('#signup-modal').hide();
			$('.ouibounce-button').click(function() {
				_ouibounce.disable();
				$('#ouibounce-modal').hide();
			});
		},
		aggressive: true
	});

	//

}
