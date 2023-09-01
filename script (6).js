const player = document.getElementById("player");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
let scoreCount = 0;
let timerCount = 20
let milSec = 600
const npc = document.getElementById("npc");
let randomPositionX = Math.floor(Math.random() * 500);
let randomPositionY = Math.floor(Math.random() * 600);
let randomScale = Math.floor(Math.random() * 80 + 20)
let npcSpawnTime = Math.random() * 5000 + 8000;

function npcSpawn(){
  npc.style.marginLeft = randomPositionX + "px";
  npc.style.marginTop = randomPositionY + "px";
  npc.style.position = "absolute";
  npc.style.display = "block";
}
let npcer = setInterval(npcSpawn, npcSpawnTime)

player.style.marginLeft = Math.floor(Math.random() * 500) + "px"
player.style.marginTop = Math.floor(Math.random() * 600) + "px"

player.addEventListener("click", function(){
  timerCount += 1
  scoreCount++
  score.textContent = "ქულა: " + scoreCount
  
  let randomPositionX = Math.floor(Math.random() * 500);
  let randomPositionY = Math.floor(Math.random() * 600);
  let randomScale = Math.floor(Math.random() * 80 + 20);

  player.style.marginLeft = randomPositionX + "px";
  player.style.marginTop = randomPositionY + "px";
  player.style.width = randomScale + "px";
  player.style.height = randomScale + "px";
});


npc.addEventListener("click", function(){
  clearInterval(npcer);
  npc.style.display = "none";
  timerCount+= Math.floor(Math.random() * 1 + 4);
  scoreCount+= Math.floor(Math.random() * 1 + 4)
})


let timeDown = setInterval(startTimer, milSec);

function startTimer(){
  timerCount--
  timer.textContent = "დრო: " + timerCount
  
  if(timerCount < 1){
    EndGame()
  }
  
}

function EndGame(){
  window.alert(`დრო გავიდა! შენი ქულების რაოდენობა ${scoreCount}-ია`)
  clearInterval(timeDown)  
}

