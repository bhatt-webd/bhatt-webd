let box=document.querySelectorAll(".box");
let reset=document.querySelector(".btn");
let msg=document.querySelector(".msg");
let msgtxt=document.querySelector(".msgtxt");

let btnnew=document.querySelector(".btnnew");
let turnO = true;
const winpatern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
////////////////// USER INPUTS //////////////////....
box.forEach((b) => {
    b.addEventListener("click",function(e) {
        if (turnO) {
            b.innerText = "O";
            turnO = false;
        }
        else {
            b.innerText = "X";
            turnO=true;
        }
        b.disabled=true;
        chkwin();
    });
});
////////RESET BUTTON................
reset.addEventListener("click",function(e) {
    box.forEach((b) => {
        b.innerText = " "
        b.disabled = false;
        msg.classList.add("hid");
        
    })
})
btnnew.addEventListener("click",function(e) {
    box.forEach((b) => {
        b.innerText = " "
        b.disabled = false;
        msgtxt.innerText="";
        msg.classList.add("hid");
        
       
        
    })
})
/////////////WINNER CHEKING................
const showwin =(winners)=>{
    msgtxt.innerText = "Winner of Game is "+winners;
}
const disbtn=() => {
for(let boxes of box){
    boxes.disabled = true;
}
}
const chkwin = () => {
    for(let ptn of winpatern){
        let pos1=box[ptn[0]].innerText;
        let pos2=box[ptn[1]].innerText;
        let pos3=box[ptn[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){

            if(pos1 === pos2 && pos2 === pos3){
                msg.classList.remove("hid");
               disbtn();
                 showwin(pos1);
        
        }
        

    }

  }

}