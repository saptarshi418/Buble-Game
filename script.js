var timer = 60;
var score =0;
var target_num;
var re_start_btn;


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
            document.querySelector("#bpnl").innerHTML=`<div id ="return_gm_ovr" ><h1>Game Over</h1><button id="strt_btn">Start Again</button></button></div>`;
            re_start_btn = document.querySelector("#strt_btn")
            .addEventListener("click",()=>{
            reset_func();
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
    timer = 60;
    score =0;
    document.querySelector("#timer_value").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    makebubble();
    runtimer();
    newhit();  
}






makebubble();
runtimer();
newhit();
// getscore()