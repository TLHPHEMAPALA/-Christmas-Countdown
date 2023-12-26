

const open=document.getElementById('open');
const close=document.getElementById('close');
const list=document.getElementById('list');

const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');



const endDate="December 25, 2024";

open.addEventListener('click',function()
{
    list.style.display="flex";
    open.style.display="none";
    close.style.display="flex";
})

close.addEventListener('click',function()
{
    close.style.display="none";
    open.style.display="flex";
    list.style.display="none";
    list.setAttribute("style","");
})

function countDown(){
    const christmasDate=new Date (endDate);
    const currentDate =new Date();
    const totalSeconds=(christmasDate-currentDate)/1000;

    const daysE=Math.floor(totalSeconds/3600/24);
    const hoursE=Math.floor(totalSeconds/3600)% 24;
    const minutesE=Math.floor(totalSeconds/60)%60;
    const secondsE=Math.floor(totalSeconds)%60;

    days.innerHTML=daysE;
    hours.innerHTML=hoursE;
    minutes.innerHTML=minutesE;
    seconds.innerHTML=secondsE;
}

countDown();

setInterval(countDown,1000);

function getMsg() {
    let myText = document.getElementById('myText').value;
    let yourElement = document.getElementById('your');
    myText.innerText = yourElement ;
    
    if (myText === (" " || "")) {
        yourElement.innerText = "Your";
    } else {
        yourElement.innerText = myText;
    } 
}