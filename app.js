let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let count=0;
let turnO= true;
let flag= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
         box.innerText="O";
         count++;
         turnO= false;
       }
       else{
          box.innerText="X";
          count++;
          turnO= true;
       }
       box.disabled= true;
       checkWinner();
       if(count==9 && flag){
          showdraw();
       }
    })
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableBoxes=()=>{
    for ( let box of boxes){
        box.disabled= false;
        box.innerText="";

    }
}
const showdraw=()=>{
    msg.innerText=`Better luck next time`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner=()=>{
    for( let pattern of winPatterns){
        
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos3val===pos2val){
                console.log("winner",pos2val);
                flag= false;
                showWinner(pos2val);
            }
        }


    }
}
const resetGame=()=>{
    flag= true;
    count=0;
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");


  
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


