function startTime() {
	var startDate = new Date();
	setInterval(function() {
		var currentDate = new Date();
		var elapsedTime = currentDate.getTime() - startDate.getTime();
		var seconds = Math.floor((elapsedTime / 1000) % 60);
		var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
		var hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);
		var days = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);

		var timer = document.getElementById('timer');
		timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	}, 1000);
}

function createItem() {
    
}