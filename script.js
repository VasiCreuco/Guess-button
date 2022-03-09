var nr_btn = 1;
let winningBtn = 0,
	value = 0;

function addBtnPlay() {
	if (value == 0) {
		var val = 3;
		while (val) {
			$('#lists').append('<div class = "btn" id = "' + nr_btn + '"> <button type="button" class="btn btn-success las la-smile" onclick = "return WinnigButton();">Click </button></div>');
			--val;
			++nr_btn;
		}
		--nr_btn;
		winningBtn = Math.floor(Math.random() * nr_btn) + 1;
		++value;
	}
}

function addButtons() {
	var nr = $('#number_entered').val();
	while (nr) {
		$('#lists_buttons').append('<div class = "btn" id = "' + nr_btn + '"> <button type="button" class="btn btn-success las la-smile" onclick = "return WinnigButton();">Click</button></div>');
		--nr;
		++nr_btn;
	}
	--nr_btn;
	winningBtn = Math.floor(Math.random() * nr_btn) + 1;
}

function WinnigButton() {
	if (winningBtn == $('#nr_btn').val()) {
		window.alert("winner");
	} else {
		window.alert("loser");
	}
}

function refreshPage() {
	location.reload();
	nr_btn = 1;
}
