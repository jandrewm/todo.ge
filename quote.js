var quotes = [
'The Way Get Started Is To Quit Talking And Begin Doing. <br> -Walt Disney',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. <br> -Winston Churchill',
'Don\'t Let Yesterday Take Up Too Much Of Today. <br> -Will Rogers',
'You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character. <br> -Unknown',
'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. <br> -Vince Lombardi',
'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You. <br> -Steve Jobs',
'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. <br> -Og Mandino',
'We May Encounter Many Defeats But We Must Not Be Defeated. <br> -Maya Angelou',
'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. <br> -Johann Wolfgang Von Goethe',
'We Generate Fears While We Sit. We Overcome Them By Action. <br> -Dr. Henry Link'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote').innerHTML =  quotes[randomNumber];
}

newQuote();