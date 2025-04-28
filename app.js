let turn0 = true;
const box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let count = 0;
const winArr = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
box.forEach((b) => {
b.addEventListener("click", () => {
  console.log("clicked on",b);
  if(b.innerText !== "")
    return;
  if(turn0) {
    b.innerText = "O";
    turn0 = false;
  } else {
    b.innerText = "X";
    turn0 = true;
  }

  b.disabled=true;
  count++;

  let isWinner=checkWinner();

  if(count===9 && !isWinner){
    gamedraw();
  }
});
}
);
const gamedraw = () => {
  msg.innerText = "Game is Draw";
  msg_container.classList.remove("hide");
  disablebtns();
};
const enablebtns = () => {
  for(let b of box){
    b.disabled = false;
    b.innerText="";
  }
};
const showWinner = (winner) => {
  console.log("Winner is found");
  msg.innerText = `Congratulations !! Winner is ${winner}`;
  msg_container.classList.remove("hide");
  disablebtns();
};


const resetgame = () => {
  enablebtns();
  count = 0; 
  turn0 = true;
  msg_container.classList.add("hide");
};
const disablebtns = () => {
  for (let b of box) {
    b.disabled = true;
  }
};

let posvalue1;
let posvalue2;
let posvalue3;

const checkWinner = () => {
  for (let arr of winArr) {
     posvalue1 = box[arr[0]].innerText;
     posvalue2 = box[arr[1]].innerText;
     posvalue3 = box[arr[2]].innerText;
   
   if(posvalue1 != "" && posvalue2 != "" && posvalue3 != ""){

    if(posvalue1 === posvalue2 && posvalue2 === posvalue3) {
  
    showWinner(posvalue1);
    return true;
   }
  }}
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);