var millisecondsToWait = 2500;
var firstClickRefresh = true;

function refreshBtn(){
    var i = 0
    if(firstClickRefresh = true){
        for(i;i<1;i++) {
            (function () {
              setTimeout(function(){
                document.getElementById('btnRefresh').classList.add('rotate');
                firstClickRefresh = false;
              }, 100);
            })(i);
          }
    }else{
        for(i;i<1;i++) {
            (function () {
              setTimeout(function(){
                document.getElementById('btnRefresh').classList.add('rotate');
              }, millisecondsToWait);
            })(i);
          }
    }
}

function showTime(){
myDate = new Date();
hours = myDate.getHours();
minutes = myDate.getMinutes();
seconds = myDate.getSeconds();
if (hours < 10) hours = 0 + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
setTimeout("showTime()", 1000);

}

setTimeout(”showTime()”, 1000);
