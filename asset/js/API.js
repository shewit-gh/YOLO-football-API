let display1 = document.getElementById('divv');


fetch("https://football-web-pages1.p.rapidapi.com/teams.json?comp=1", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "969110f7bcmsh97b309f1d097af8p1c6f91jsnd8ccc6c4ad5d",
        "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
    }
})
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
        const team = data.teams
        display1.innerHTML = ` 
	   <div class="button"><a href ="arsenal.html" class = "name">${team[0]['full-name']}</a></button></div>
	   <div class="button"><a href ="astonvilla.html" class = "name">${team[1]['full-name']}</a></button></div>
	   <div class="button"><a href ="brighton.html" class = "name">${team[2]['full-name']}</a></button></div>
	   <div class="button"><a href ="burnely.html" class = "name">${team[3]['full-name']}</a></button></div>
	   <div class="button"><a href ="chelsea.html" class = "name">${team[4]['full-name']}</a></button></div>
	   <div class="button"><a href ="crystalpalace.html" class = "name">${team[5]['full-name']}</a></button></div>
	   <div class="button"><a href ="Everton.html" class = "name">${team[6]['full-name']}</a></button></div>
	   <div class="button"><a href ="Fulham.html" class = "name">${team[7]['full-name']}</a></button></div>
	   <div class="button"><a href ="leeds.html" class = "name">${team[8]['full-name']}</a></button></div>
	   <div class="button"><a href ="leicster.html" class = "name">${team[9]['full-name']}</a></button></div>
	   <div class="button"><a href ="Liverpool.html" class = "name">${team[12]['full-name']}</a></button></div>
	   <div class="button"><a href ="Manchestercity.html" class = "name">${team[11]['full-name']}</a></button></div>
	   <div class="button"><a href ="manchesterunited.html" class = "name">${team[12]['full-name']}</a></button></div>
	   <div class="button"><a href ="NewcastleUnited.html" class = "name">${team[13]['full-name']}</a></button></div>
	   <div class="button"><a href ="shifield.html" class = "name">${team[14]['full-name']}</a></button></div>
	   <div class="button"><a href ="southampton.html" class = "name">${team[15]['full-name']}</a></button></div>
	   <div class="button"><a href ="tottenham.html" class = "name">${team[16]['full-name']}</a></button></div>
	   <div class="button"><a href ="westbrom.html" class = "name">${team[17]['full-name']}</a></button></div>
	   <div class="button"><a href ="westham.html" class = "name">${team[18]['full-name']}</a></button></div>
	   <div class="button"><a href ="wolves.html" class = "name">${team[19]['full-name']}</a></button></div>
	   `



    }).catch(err => {
        console.error(err)
    })




