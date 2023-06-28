let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");


setInterval(()=> {
let currentTime = new Date();

 
    if(currentTime.getHours()<=12) {
       hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    } 
    else {
    hrs.innerHTML = (currentTime.getHours()-12);
    ampm.innerHTML = 'PM';
    }
    
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
