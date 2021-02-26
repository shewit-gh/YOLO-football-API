//getting the DOM elements
var elapsedTime = document.querySelector("#elapsed");
var homeTeamImage = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamImage = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoal = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");


//the functions to create an element
function addMatchTile(data){
    //createing the tile div


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

    //creating the home match box
    var bigcontainer2 = document.createElement('div')
    bigcontainer2.classList.add("bigcontainer2")
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = data['home-team'].name;
    //var homeTileTeamLogo = document.createElement('img');
    //homeTileTeamLogo.src=data['teams']['home']['logo'];
    //homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML =  data['away-team'].name;
    //var awayTileTeamLogo = document.createElement('img');
    //awayTileTeamLogo.src=data['teams']['away']['logo'];
    //awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    //createing the score
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
    
    //append all the element to the parent
    // matchtile.appendChild(bigcontainer);
    bigcontainer2.appendChild(homeTeam);
    bigcontainer2.appendChild(score);
    bigcontainer2.appendChild(awayTeam);
    
    


    matchtile.appendChild(bigcontainer)
    matchtile.appendChild(bigcontainer2)
    matchtile.appendChild(bigcontainer3)



    matchTable.appendChild(matchtile);
}

//fetching the data
fetch("https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&team=7", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fba5883b82msh26a5be4a9c98ee9p1fc9c4jsn88bf1d0faf3a",
		"x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
	}
})
.then(response => response.json().then(data => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyy = today.getFullYear();
    today = yyy + '-' + mm + '-' + dd;
    console.log(data);
    console.log(today);
//     var team = data['fixtures-results'].matches[1]
//     var time = data['fixtures-results'].matches[1]['status'].short;
//     //var hgoals = matchesList[0]['home-team'];
//     // var teams = matchesList[0]['teams'];
//     // console.log(matchesList.length);
//    //Now let's set our first match
//       elapsedTime.innerHTML = time;
// //    homeTeamImage.src = teams['home']['logo'];
//       homeTeamName.innerHTML = team['home-team'].name;
// //    awayTeamImage.src = teams['away']['logo'];
//       awayTeamName.innerHTML = team['away-team'].name;
//       lastMatchGoal.innerHTML = team['home-team'].score+ " - " + team['away-team'].score;
var button = document.createElement("button");
button.classList.add("button");
// button.innerHTML = "See upcoming fixtures"
button.style.borderStyle = 'none';
button.style.cursor = "pointer";
button.style.background="inherit"


// matchTable.appendChild(button);
 button .innerHTML= `  
<i class="fas fa-chevron-circle-down down" role="button" style = "color:#0a4595;"></i>

`
button.addEventListener('click', function(){ 
    for(var i = 0; i<data['fixtures-results'].matches.length;i++){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyy = today.getFullYear();
        today = yyy + '-' + mm + '-' + dd;
        
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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyy = today.getFullYear();
    today = yyy + '-' + mm + '-' + dd;
    
        if(data['fixtures-results'].matches[i]['competition'].name !== 'Premier League'){
            continue;
        }
        else if (data['fixtures-results'].matches[i].date > today){
            // console.log(data['fixtures-results'].matches[i].date > date.getDate())
            
            // var button = document.createElement('button');
            // button.classList.add("button");
            // button.style.borderStyle = 'none';
            // button.style.cursor = "pointer"
            
            // button.innerHTML = "See upcoming fixtures"
            
            // matchTable.appendChild(button);
        //      button.innerHTML = `  
        //     <i class="fas fa-chevron-circle-down down" role="button"></i>
      
        //  `
          matchTable.appendChild(button);
          
            break;
         
            
        }
        else{
            addMatchTile(data['fixtures-results'].matches[i]);
        }
        
       
      

   }

}))
.catch(err => {
    console.log(err);
});