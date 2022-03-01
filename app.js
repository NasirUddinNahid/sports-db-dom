const allPlayers = () => {
    const searchValue = document.getElementById("search-box").value;

    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}
`)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
}

const showPlayerDetails = (players)=>{
   for(const player of players){
    const parent = document.getElementById("player-container")
    const div=document.createElement('div')
    div.innerHTML=` <div class="card border p-5">
    <div class="pro-pic">
        <img class="w-25" src="${player.strThumb}" alt="">
    </div>
    <h2>name:${player.strPlayer}</h2>
    <h2>country:${player.strNationality}</h2>
    <p></p>
    <div class="allButton">
        <button class="btn btn-danger">Delet</button>
        <button onclick="details()" class="btn btn-success">Details</button>
    </div>

</div>`
parent.appendChild(div);
   }
}
const details=(info)=>{
    document.getElementById("details-container").innerHTML=`
    <div>
    <img src="" alt="">
    <h1>name:$</h1>

    </div>
    
    
    `

}