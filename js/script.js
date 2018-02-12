// script.js

function drawTree(h) {
	for (var i = 1 ; i <= h ; i++) {
		var star = '';
		for (var j = 1 ; j <= h - i ; j++) {
			star += ' ';
		}
		for (var k = 1 ; k <= (2 * i - 1); k++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(prompt('Podaj liczbę poziomow choinki: ')); 


