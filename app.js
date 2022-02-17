// temp variable
var min =0;
var sec =0;
var msec =0;
var interval; 

// get elements values
var minHeading  = document.getElementById("min");
var secHeading  = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec= 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
}


function start(){
    interval = setInterval(timer,10);
}


function stop(){
  clearInterval(interval);
}


function reset(){
    min =0;
    sec =0;
    msec =0;
    minHeading.innerHTMLg = min;
    secHeading.innerHTML =sec;
    msecHeading.innerHTML = msec;
stop();
}
  




// var count = 0;
// var interval=true;
// function timeOut(){
// if(interval){
//     count++;
// }

// if(count > 100){
//     sec++;
//     msec.innerHTML = 0;
//     console.log(minute.value);
// }

//     msec.innerHTML = count;

// }


// setInterval(timeOut,10);




// function stop(){
//     interval=false;
// }

// function start(){
//     interval=true;
// }

// function reSet(){
//     interval=false;
//     count=0;
// }
