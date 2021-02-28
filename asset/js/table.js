let display2 = document.getElementById('data');
fetch("https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "969110f7bcmsh97b309f1d097af8p1c6f91jsnd8ccc6c4ad5d",
			"x-rapidapi-host": "football-web-pages1.p.rapidapi.com"
		}
	
	
}).then(response =>{
	return response.json()
}).then(data =>{
    console.log(data)
	const table = data["league-table"].teams
	console.log(table.length)
	display2.innerHTML = ` 
    <tr>
    <th>CLUB</th>
    <th></th>
    <th></th>
    <th>MP</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>GF</th>
    <th>GA</th>
    <th>GD</th>
    <th>Pts</th>
  </tr>
		
  <tr>
  <td>${table[0].position}</td>
  <td><img src="./asset/image/mancity.png" alt="manchester city FC" srcset=""></td>
  <td>${table[0].name}</td>
  <td>${table[0]["all-matches"].played}</td>
  <td>${table[0]["all-matches"].won}</td>
  <td>${table[0]["all-matches"].drawn}</td>
  <td>${table[0]["all-matches"].lost}</td>
  <td>${table[0]["all-matches"].for}</td>
  <td>${table[0]["all-matches"].against}</td>
  <td>${table[0]["all-matches"]["goal-difference"]}</td>
  <td>${((table[0]["all-matches"].won)*3) + (table[0]["all-matches"].drawn)}</td>
</tr>
<tr>
<td>${table[1].position}</td>
<td><img src="./asset/image/manutd.png" alt="manchesterunited FC" srcset=""></td>
<td>${table[1].name}</td>
<td>${table[1]["all-matches"].played}</td>
<td>${table[1]["all-matches"].won}</td>
<td>${table[1]["all-matches"].drawn}</td>
<td>${table[1]["all-matches"].lost}</td>
<td>${table[1]["all-matches"].for}</td>
<td>${table[1]["all-matches"].against}</td>
<td>${table[1]["all-matches"]["goal-difference"]}</td>
<td>${((table[1]["all-matches"].won)*3) + (table[1]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[2].position}</td>
<td><img src="./asset/image/leicester.png" alt="leicester city FC" srcset=""></td>
<td>${table[2].name}</td>
<td>${table[2]["all-matches"].played}</td>
<td>${table[2]["all-matches"].won}</td>
<td>${table[2]["all-matches"].drawn}</td>
<td>${table[2]["all-matches"].lost}</td>
<td>${table[2]["all-matches"].for}</td>
<td>${table[2]["all-matches"].against}</td>
<td>${table[2]["all-matches"]["goal-difference"]}</td>
<td>${((table[2]["all-matches"].won)*3) + (table[2]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[3].position}</td>
<td><img src="./asset/image/westham.png" alt="westham FC" srcset=""></td>
<td>${table[3].name}</td>
<td>${table[3]["all-matches"].played}</td>
<td>${table[3]["all-matches"].won}</td>
<td>${table[3]["all-matches"].drawn}</td>
<td>${table[3]["all-matches"].lost}</td>
<td>${table[3]["all-matches"].for}</td>
<td>${table[3]["all-matches"].against}</td>
<td>${table[3]["all-matches"]["goal-difference"]}</td>
<td>${((table[3]["all-matches"].won)*3) + (table[3]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[4].position}</td>
<td> <img src="./asset/image/chelsea.png" alt="chelsea FC" srcset=""></td>
<td>${table[4].name}</td>
<td>${table[4]["all-matches"].played}</td>
<td>${table[4]["all-matches"].won}</td>
<td>${table[4]["all-matches"].drawn}</td>
<td>${table[4]["all-matches"].lost}</td>
<td>${table[4]["all-matches"].for}</td>
<td>${table[4]["all-matches"].against}</td>
<td>${table[4]["all-matches"]["goal-difference"]}</td>
<td>${((table[4]["all-matches"].won)*3) + (table[4]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[5].position}</td>
<td><img src="./asset/image/Liverpool.png" alt="liverpool FC" srcset=""></td>
<td>${table[5].name}</td>
<td>${table[5]["all-matches"].played}</td>
<td>${table[5]["all-matches"].won}</td>
<td>${table[5]["all-matches"].drawn}</td>
<td>${table[5]["all-matches"].lost}</td>
<td>${table[5]["all-matches"].for}</td>
<td>${table[5]["all-matches"].against}</td>
<td>${table[5]["all-matches"]["goal-difference"]}</td>
<td>${((table[5]["all-matches"].won)*3) + (table[5]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[6].position}</td>
<td><img src="./asset/image/everton.png" alt="everton FC" srcset=""></td>
<td>${table[6].name}</td>
<td>${table[6]["all-matches"].played}</td>
<td>${table[6]["all-matches"].won}</td>
<td>${table[6]["all-matches"].drawn}</td>
<td>${table[6]["all-matches"].lost}</td>
<td>${table[6]["all-matches"].for}</td>
<td>${table[6]["all-matches"].against}</td>
<td>${table[6]["all-matches"]["goal-difference"]}</td>
<td>${((table[6]["all-matches"].won)*3) + (table[6]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[7].position}</td>
<td><img src="./asset/image/totthenam.png" alt="tottenaham FC" srcset=""></td>
<td>${table[7].name}</td>
<td>${table[7]["all-matches"].played}</td>
<td>${table[7]["all-matches"].won}</td>
<td>${table[7]["all-matches"].drawn}</td>
<td>${table[7]["all-matches"].lost}</td>
<td>${table[7]["all-matches"].for}</td>
<td>${table[7]["all-matches"].against}</td>
<td>${table[7]["all-matches"]["goal-difference"]}</td>
<td>${((table[7]["all-matches"].won)*3) + (table[7]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[8].position}</td>
<td><img src="./asset/image/astonvilla.png" alt="astonvilla FC" srcset=""></td>
<td>${table[8].name}</td>
<td>${table[8]["all-matches"].played}</td>
<td>${table[8]["all-matches"].won}</td>
<td>${table[8]["all-matches"].drawn}</td>
<td>${table[8]["all-matches"].lost}</td>
<td>${table[8]["all-matches"].for}</td>
<td>${table[8]["all-matches"].against}</td>
<td>${table[8]["all-matches"]["goal-difference"]}</td>
<td>${((table[8]["all-matches"].won)*3) + (table[8]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[9].position}</td>
<td><img src="./asset/image/arsenal1.png" alt="arsenal FC" srcset=""></td>
<td>${table[9].name}</td>
<td>${table[9]["all-matches"].played}</td>
<td>${table[9]["all-matches"].won}</td>
<td>${table[9]["all-matches"].drawn}</td>
<td>${table[9]["all-matches"].lost}</td>
<td>${table[9]["all-matches"].for}</td>
<td>${table[9]["all-matches"].against}</td>
<td>${table[9]["all-matches"]["goal-difference"]}</td>
<td>${((table[9]["all-matches"].won)*3) + (table[9]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[10].position}</td>
<td><img src="./asset/image/leeds.png" alt="leedsunited FC" srcset=""></td>
<td>${table[10].name}</td>
<td>${table[10]["all-matches"].played}</td>
<td>${table[10]["all-matches"].won}</td>
<td>${table[10]["all-matches"].drawn}</td>
<td>${table[10]["all-matches"].lost}</td>
<td>${table[10]["all-matches"].for}</td>
<td>${table[10]["all-matches"].against}</td>
<td>${table[10]["all-matches"]["goal-difference"]}</td>
<td>${((table[10]["all-matches"].won)*3) + (table[10]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[11].position}</td>
<td><img src="./asset/image/wolves.png" alt=">Wolverhampton Wanderers FC" srcset=""></td>
<td>${table[11].name}</td>
<td>${table[11]["all-matches"].played}</td>
<td>${table[11]["all-matches"].won}</td>
<td>${table[11]["all-matches"].drawn}</td>
<td>${table[11]["all-matches"].lost}</td>
<td>${table[11]["all-matches"].for}</td>
<td>${table[11]["all-matches"].against}</td>
<td>${table[11]["all-matches"]["goal-difference"]}</td>
<td>${((table[11]["all-matches"].won)*3) + (table[11]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[12].position}</td>
<td><img src="./asset/image/crystalpalace.png" alt="crystalpalace FC" srcset=""></td>
<td>${table[12].name}</td>
<td>${table[12]["all-matches"].played}</td>
<td>${table[12]["all-matches"].won}</td>
<td>${table[12]["all-matches"].drawn}</td>
<td>${table[12]["all-matches"].lost}</td>
<td>${table[12]["all-matches"].for}</td>
<td>${table[12]["all-matches"].against}</td>
<td>${table[12]["all-matches"]["goal-difference"]}</td>
<td>${((table[12]["all-matches"].won)*3) + (table[12]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[13].position}</td>
<td><img src="./asset/image/southampton.png" alt="southampton FC" srcset=""></td>
<td>${table[13].name}</td>
<td>${table[13]["all-matches"].played}</td>
<td>${table[13]["all-matches"].won}</td>
<td>${table[13]["all-matches"].drawn}</td>
<td>${table[13]["all-matches"].lost}</td>
<td>${table[13]["all-matches"].for}</td>
<td>${table[13]["all-matches"].against}</td>
<td>${table[13]["all-matches"]["goal-difference"]}</td>
<td>${((table[13]["all-matches"].won)*3) + (table[13]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[14].position}</td>
<td><img src="./asset/image/burnley.png" alt="burnley FC" srcset=""></td>
<td>${table[14].name}</td>
<td>${table[14]["all-matches"].played}</td>
<td>${table[14]["all-matches"].won}</td>
<td>${table[14]["all-matches"].drawn}</td>
<td>${table[14]["all-matches"].lost}</td>
<td>${table[14]["all-matches"].for}</td>
<td>${table[14]["all-matches"].against}</td>
<td>${table[14]["all-matches"]["goal-difference"]}</td>
<td>${((table[14]["all-matches"].won)*3) + (table[14]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[15].position}</td>
<td><img src="./asset/image/brighton.png" alt="brighton & hove albion FC" srcset=""></td>
<td>${table[15].name}</td>
<td>${table[15]["all-matches"].played}</td>
<td>${table[15]["all-matches"].won}</td>
<td>${table[15]["all-matches"].drawn}</td>
<td>${table[15]["all-matches"].lost}</td>
<td>${table[15]["all-matches"].for}</td>
<td>${table[15]["all-matches"].against}</td>
<td>${table[15]["all-matches"]["goal-difference"]}</td>
<td>${((table[15]["all-matches"].won)*3) + (table[15]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[16].position}</td>
<td> <img src="./asset/image/newunited.png" alt="newcastleunited FC" srcset=""></td>
<td>${table[16].name}</td>
<td>${table[16]["all-matches"].played}</td>
<td>${table[16]["all-matches"].won}</td>
<td>${table[16]["all-matches"].drawn}</td>
<td>${table[16]["all-matches"].lost}</td>
<td>${table[16]["all-matches"].for}</td>
<td>${table[16]["all-matches"].against}</td>
<td>${table[16]["all-matches"]["goal-difference"]}</td>
<td>${((table[16]["all-matches"].won)*3) + (table[16]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[17].position}</td>
<td><img src="./asset/image/fulham.png" alt="fulham FC" srcset=""></td>
<td>${table[17].name}</td>
<td>${table[17]["all-matches"].played}</td>
<td>${table[17]["all-matches"].won}</td>
<td>${table[17]["all-matches"].drawn}</td>
<td>${table[17]["all-matches"].lost}</td>
<td>${table[17]["all-matches"].for}</td>
<td>${table[17]["all-matches"].against}</td>
<td>${table[17]["all-matches"]["goal-difference"]}</td>
<td>${((table[17]["all-matches"].won)*3) + (table[17]["all-matches"].drawn)}</td>

</tr>
<tr>
  <td>${table[18].position}</td>
  <td><img src="./asset/image/westbrom.png" alt="astonvilla FC" srcset=""></td>
  <td>${table[18].name}</td>
  <td>${table[18]["all-matches"].played}</td>
  <td>${table[18]["all-matches"].won}</td>
  <td>${table[18]["all-matches"].drawn}</td>
  <td>${table[18]["all-matches"].lost}</td>
  <td>${table[18]["all-matches"].for}</td>
  <td>${table[18]["all-matches"].against}</td>
  <td>${table[18]["all-matches"]["goal-difference"]}</td>
  <td>${((table[18]["all-matches"].won)*3) + (table[18]["all-matches"].drawn)}</td>

</tr>
<tr>
<td>${table[19].position}</td>
<td><img src="./asset/image/sheffield.png" alt="sheffieldunited FC" srcset=""></td>
<td>${table[19].name}</td>
<td>${table[19]["all-matches"].played}</td>
<td>${table[19]["all-matches"].won}</td>
<td>${table[19]["all-matches"].drawn}</td>
<td>${table[19]["all-matches"].lost}</td>
<td>${table[19]["all-matches"].for}</td>
<td>${table[19]["all-matches"].against}</td>
<td>${table[19]["all-matches"]["goal-difference"]}</td>
<td>${((table[19]["all-matches"].won)*3) + (table[19]["all-matches"].drawn)}</td>

</tr>




    
    
    
    
    
    
    
    `

}).catch(err =>{
    console.error(err)
})