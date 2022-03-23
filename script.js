var nr_btn = 0;
var winningBtn = 0, value = 0;

function addBtnPlay() {
	if (value == 0) {
		var val = 3;
		while (val) {
			++nr_btn;
			document.getElementById("lists").innerHTML += '<button type="button"  id ="' + nr_btn + '" class="btn btn-success" onClick = "WinnigButton(this.id)">Click </button>' + "  ";
			--val;
		}
		winningBtn = Math.floor(Math.random() * (nr_btn - 1 + 1) + 1);
		++value;
	}
}

function addButtons() {
	var nr = document.getElementById("number_entered").value;
	while (nr) {
		document.getElementById("lists_buttons").innerHTML += '<button type="button"  id ="' + nr_btn + '" class="btn btn-success" onClick = "WinnigButton(this.id)">Click </button>' + " ";
		--nr;
		++nr_btn;
	}
	--nr_btn;
	winningBtn = Math.floor(Math.random() * (nr_btn - 1 + 1) + 1);
}

function WinnigButton(clicked_id) {
	if (winningBtn == clicked_id) {
		window.alert("winner");
		winningBtn = Math.floor(Math.random() * (nr_btn - 1 + 1) + 1);
	} else {
		window.alert("loser");
		winningBtn = Math.floor(Math.random() * (nr_btn - 1 + 1) + 1);
	}
}

function refreshPage() {
	location.reload();
	nr_btn = 0;
}
