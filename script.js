var timer = 60;
var score =0;
var target_num;
var re_start_btn;
var strt_btn;
var flagg = 0;


strt_btn=document.querySelector(".nav_button");
scoreValRef = document.querySelector("#scoreval")
strt_btn.addEventListener("click",()=>{
    if(flagg==0){
        makebubble();
        runtimer();
        newhit();
        flagg++;
        // flagg = !flagg;
        document.querySelector(".nav_button").textContent="RESET GAME";
        
    }
    else{
        // makebubble();
        // runtimer();
        // newhit();
        timer = 60;
        score = 0;
        scoreValRef.textContent = score;
        reset_func();
        flagg = 0;
        // document.querySelector(".nav_button").textContent="START GAME";

        // flagg = !flagg;
    }
})


function makebubble(){
    var bub =" ";

for(var i=1;i<=184;i++){
    var bub_val =Math.floor(Math.random()*10);
    
   bub += `<div class="bubble">${bub_val}</div>`;
}

document.querySelector("#bpnl").innerHTML = bub;

}
function newhit(){
    target_num = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = target_num;
}

function runtimer(){
    var timerint = setInterval(()=>{
        if(timer>0){
            timer--;
        document.querySelector("#timer_value").textContent =timer;
        }
        else{

            clearInterval(timerint);
            document.querySelector(".nav_button").style.display="none";
            document.querySelector("#bpnl").innerHTML=`<div id ="return_gm_ovr" ><h1>Game Over</h1><button id="strt_btn">Start Again</button></button></div>`;

            re_start_btn = document.querySelector("#strt_btn")
            .addEventListener("click",()=>{
                timer = 60;
                score = 0;
                document.querySelector(".nav_button").style.display = "block";
                scoreValRef.textContent = score;
                makebubble();
                clearInterval(timerint);
                runtimer();
                newhit();
            })
        }
        
    },1000);
}

function getscore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#bpnl")
.addEventListener("click",function (dets){
    var click_num = Number(dets.target.textContent);
    if(click_num==target_num){
        getscore();
        makebubble();
        newhit();
    }
})




function reset_func(){
    clearInterval(timerint);
    makebubble();
    runtimer();
    newhit();  
}






makebubble();
// runtimer();
// newhit();
// getscore()