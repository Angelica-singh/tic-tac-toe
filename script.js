let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn= document.querySelector(".new-game");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winner_ptrn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("button was clicked");
        if(turnO)
            {
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;

            checkwinner();
    });
});

const checkwinner = () => {
    for( let pattern of winner_ptrn)
    {  
       let patvalue1= boxes[pattern[0]].innerText;
       let patvalue2= boxes[pattern[1]].innerText;
       let patvalue3= boxes[pattern[2]].innerText;

       if(patvalue1 != "" && patvalue2 != "" && patvalue3 != ""){
        if(patvalue1 === patvalue2 && patvalue2 === patvalue3)
        {
            console.log("winner",patvalue1);
            show_winner(patvalue1);
        }
       } 
    }
};

const show_winner = (winner) => {
        msg.innerText=`Hehe, $(winner) jeet gaya!`;
        msg_container.classList.remove("hide");
};

resetbtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText=("");
        box.disabled=false;
    });
    msg_container.classList.add("hide");
    turnO=true;
});
newbtn.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText=("");
        box.disabled=false;
    });
    msg_container.classList.add("hide");
    turnO=true;
});
