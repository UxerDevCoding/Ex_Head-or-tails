let button = document.getElementById("startbutton");
let result = document.getElementById("result");

 button.onclick = (() => {
     let coin = Math.round(Math.random()*2);
     if (coin===0){
         result.innerHTML="Head";
     }

     if (coin===1){
         result.innerHTML="Tail";
     }
     console.log(result.innerHTML);
    });