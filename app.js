let home = 0
let away = 0

function homeScore(){
  home++
  drawScore()
  return home
}

function awayScore(){
  away++
  drawScore()
  return away

}

function homeScoreThree(){
  home +=3
  drawScore()
  return home
}

function awayScoreThree(){
  away +=3
  drawScore()
  return away
}

function drawScore(){
  // @ts-ignore
  document.getElementById(`homeScore`).textContent = home.toString();
  // @ts-ignore
  document.getElementById(`awayScore`).textContent = away.toString();
  document.querySelectorAll('.score').forEach(el => el.classList.add('large-score'));
}


function reset(){
  home = 0
  away = 0
  drawScore()
}



