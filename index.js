//player = x
//gamewon;
//change player;
//012, 036, 678, 258, 345, 147, 048, 246
let player = "X";
let gameover = false;
let music = new Audio("Gazab Dil Juunglee.mp3");
let click = new Audio("decidemp3-14575.mp3");
let win = new Audio("win.wav");
let loose = new Audio("loose.wav");
let draw = document.getElementsByClassName("draw")[0];
let count =0;
let box = document.getElementsByClassName("box");


//generate color
const generateColor = () =>{
    let hex = '0123456789ABCDEF';
    let colorr='#';
    for(let i=0;i<6;i++){
     colorr+=hex[Math.floor(Math.random()*16)];
    }
    return colorr;
};

//background color for players click
let xcolor = generateColor();
let ycolor = generateColor();

//background color for box
let d = generateColor();
Array.from(box).forEach((box)=>{
    box.style.backgroundColor = d;
});


let changePlayer = () =>{
    return player == "X" ? "O" : "X"; 
}

//check function if game is won after every move
const checkWon = () =>{
    let boxText = document.getElementsByClassName("box-text");
    
    if(check(boxText[0].innerText,boxText[1].innerText,boxText[2].innerText) || check(boxText[0].innerText,boxText[3].innerText,boxText[6].innerText) 
    || check(boxText[6].innerText,boxText[7].innerText,boxText[8].innerText) || check(boxText[3].innerText,boxText[4].innerText,boxText[5].innerText)
    || check(boxText[2].innerText,boxText[5].innerText,boxText[8].innerText) || check(boxText[1].innerText,boxText[4].innerText,boxText[7].innerText)
    || check(boxText[0].innerText,boxText[4].innerText,boxText[8].innerText) || check(boxText[2].innerText,boxText[4].innerText,boxText[6].innerText))
   {
       win.play();
       gameover = true;
       let imgBox = document.getElementsByClassName("imgBox")[0];
       imgBox.style.display = "block";
    //    alter(imgBox);
   }
};
// const alter = (img) =>{
//     img.style.display === "none" ? "block" : "none";
// }
const check = ( t1, t2, t3) => {
 if(t1 === t2 && t2 === t3 && t3 === t1 && t3 !== "")
 return true;
 return false;
}
// const checkWon = () =>{
// //     let boxtext = document.getElementsByClassName("box-text");
// //  console.log(boxtext);
// }

Array.from(box).forEach((box) =>{
    let boxText = box.querySelector(".box-text");
    box.addEventListener("click",() =>{
        if(boxText.innerText === "" && !gameover){
            // let music = document.getElementById("music");
            // music.play();
            click.play();
            if(player == 'X')
            box.style.backgroundColor = xcolor;
            else
            box.style.backgroundColor = ycolor;
            count++;
            // console.log(count);
          boxText.innerHTML = player;
          checkWon();
        player = changePlayer();
           document.getElementsByClassName("player")[0].innerHTML = player;
       if(count >= 9 && !gameover){
           console.log("In");
           gameover = true;
          
           loose.play();
           console.log(draw);
           draw.style.display = 'block';
       }
       
    }
    });
});


//reset button;
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click",()=>{
    count=0;
    let box = document.getElementsByClassName("box");
    // console.log(box);
    Array.from(box).forEach((element)=>{
        let boxtext = element.querySelectorAll(".box-text")[0];
        boxtext.innerText = " ";
    });
    let imgBox = document.getElementsByClassName("imgBox")[0];
    imgBox.style.display = "none";
    
    //bg color again to red;

    let c = generateColor();
    // console.log(c);
    Array.from(box).forEach((box)=>{
        box.style.backgroundColor = c;
    });


    //Or
    // let boxText = document.getElementsByClassName("box-text");
    // console.log(boxText);
    // Array.from(boxText).forEach((element)=>{
    //     element.innerText = " ";
    // });
    draw.style.display = 'none';
    player = "X";
    gameover = false;
});
