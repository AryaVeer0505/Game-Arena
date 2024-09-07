let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#comp-score")
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randonInd = Math.floor(Math.random() * 3);
  return options[randonInd];
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let winner = true;
    if (userChoice === "rock") {
      winner = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      winner = compChoice === "scissors" ? false : true;
    } else {
      winner = compChoice === "rock" ? false : true;
    }
    showWinner(winner,userChoice,compChoice)
  }
};
const drawGame = () => {
  msg.innerText = "Game draw,play again";
  msg.style.backgroundColor = "black";
};
const showWinner=(winner,userChoice,compChoice)=>{
    if(winner){
        userscore++
        userScorePara.innerText=userscore
        msg.innerText=`you won,your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compscore++
        compScorePara.innerText=compscore
        msg.innerText=`you lose, ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}