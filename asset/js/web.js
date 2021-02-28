var elapsedTime = document.querySelector("#elapsed");
var homeTeamImage = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamImage = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoal = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");

var button = document.createElement("button");
button.classList.add("button");
button.style.borderStyle = 'none';
button.style.cursor = "pointer";
button.style.background="inherit"

function addMatchTile(data){
    var matchtile = document.createElement('div');
    matchtile.classList.add("match-tile");

    var bigcontainer = document.createElement('div')
    bigcontainer.style.position ='relative'
    var empty = document.createElement('div')
    empty.classList.add("empty")
    var ft = document.createElement('div')
    ft.classList.add("ft")
    var fullTime= document.createElement('p');
    fullTime.style.position="relative"
    fullTime.innerHTML = data['status'].short;
    ft.appendChild(fullTime);
    bigcontainer.appendChild(empty)
    bigcontainer.appendChild(ft)

    var bigcontainer2 = document.createElement('div')
    bigcontainer2.classList.add("bigcontainer2")

    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = data['home-team'].name;
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");

    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML =  data['away-team'].name;
    awayTeam.appendChild(awayTileTeamName);

    
    var score = document.createElement('p');
    score.innerHTML = data['home-team'].score + " - " + data['away-team'].score;
    var bigcontainer3 = document.createElement('div')
    bigcontainer3.style.position ='relative'
    var empty1 = document.createElement('div')
    empty.classList.add("empty1")
    var date = document.createElement('div')
    date.classList.add("ft")
    var date1= document.createElement('p');
    date1.style.position="relative"
    date1.innerHTML = data.date;
    date.appendChild(date1);
    bigcontainer3.appendChild(empty1)
    bigcontainer3.appendChild(date)
    
    bigcontainer2.appendChild(homeTeam);
    bigcontainer2.appendChild(score);
    bigcontainer2.appendChild(awayTeam);
    
    matchtile.appendChild(bigcontainer)
    matchtile.appendChild(bigcontainer2)
    matchtile.appendChild(bigcontainer3)

    matchTable.appendChild(matchtile);
}

function arsenal(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#ff0000"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function astonvilla(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#490024;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=2", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function brighton(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#0000fd;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=21", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function burnley(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#70193d;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=22", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function chelsea(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#0a4595;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=22", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function crystalpalace(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#0055a5;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=8", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function everton(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#003399;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=9", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function fulham(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#090808;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function leeds(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#152F7B;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=29", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function leicester(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#152F7B;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=30", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function liverpool(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#d3171e;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=11", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function mancity(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#202124;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=12", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}
function manunited(){
    button .innerHTML= `<i class="fas fa-chevron-circle-down down" role="button" style = "color:#d20222;"></i>`
    fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=15", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
            "x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
        }
    })
.then(response => response.json().then(data => {doThis(data)})).catch(err => {
    console.log(err);
});
}




function doThis(data){
 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyy = today.getFullYear();
    today = yyy + '-' + mm + '-' + dd;
    console.log(data);
    
button.addEventListener('click', function(){ 
    for(var i = 0; i<data['fixtures-results'].matches.length;i++){
        
            if(data['fixtures-results'].matches[i]['competition'].name !== 'Premier League'){
                continue;
            }
            else if(data['fixtures-results'].matches[i].date > today){
                addMatchTile(data['fixtures-results'].matches[i]);
            }
            else if(data['fixtures-results'].matches[i].date < today){
                continue;
            }
            
    }
    button.style.display = 'none'
});
   for(var i = 0; i<data['fixtures-results'].matches.length;i++){
    
        if(data['fixtures-results'].matches[i]['competition'].name !== 'Premier League'){
            continue;
        }
        else if (data['fixtures-results'].matches[i].date > today){
            matchTable.appendChild(button);
            break;
        }
        else{
            addMatchTile(data['fixtures-results'].matches[i]);
        }
    }

}