const clock = document.querySelector("h2#clock");


function showTime()
{
    const now = new Date();

    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${second}`; 

}

setInterval(showTime, 1000);
showTime();