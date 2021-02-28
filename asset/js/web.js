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