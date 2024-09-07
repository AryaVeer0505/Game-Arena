const boxes=document.querySelectorAll(".box")
const reset=document.querySelector("#reset")
const newgame=document.querySelector("#new-game")
const msg=document.querySelector("#msg")
const msgcontainer=document.querySelector(".msg-container")
let turnO=true

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkWinner()
    })
})

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
]

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1)
            }
        }
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableBox()
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false
         box.innerText=""
    }
}

const resetbtn=()=>{
    turnO=true
    enableBox()
   
    msgcontainer.classList.add("hide")
}
reset.addEventListener("click",resetbtn)
newgame.addEventListener("click",resetbtn)