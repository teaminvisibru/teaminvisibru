var cmd = prompt('Please enter a command');
if(cmd === 'home') {
	window.open('http://teaminvisibru.github.io/index.html');
  }
else if(cmd === 'games') {
	window.open('http://teaminvisibru.github.io/games.html');
  }
else if(cmd === 'about') {
	window.open('teaminvisibru.github.io/about.html')
}
else if(cmd === 'fallback') {
	window.open('teaminvisibru.github.io/fallback.html')
}
else {
	alert('Please enter a valid command')
}
