let gameSeq=[];
let Userseq=[];
let btns = ["green", "red", "yellow", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelectorAll(".btn");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started = true;
        levelUp();
    }


})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp() {
    Userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn = document.getElementById(randcolor);
    // console.log(randbtn);
    gameSeq.push(randcolor);
    // console.log(gameSeq);
    btnflash(randbtn);
}
function checkAns(idx){


    if(Userseq[idx]===gameSeq[idx]){
        if(Userseq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game Over You Piece of Color Blind, your score is ${level} press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "black";
        },200);
        resetGame();
    }
}
function resetGame(){
    started = false;
    gameSeq = [];
    Userseq = [];
    level = 0;
}
function btnpress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    Userseq.push(userColor);
    console.log(gameSeq);
    checkAns(Userseq.length-1)
}

for(bt of btn){
    bt.addEventListener("click",btnpress);
}