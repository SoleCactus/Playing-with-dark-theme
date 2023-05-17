const html = document.querySelector('html');
const button = document.querySelector('#btn');
let clicks = 0;

function darkTheme(){
    html.style.cssText = "animation: gettingDark; animation-duration: 0.3s; animation-fill-mode: forwards;";
    button.style.cssText = "background-image: url(\"moon.png\"); background-color: black; animation: gettingDark; animation-duration: 0.3s; animation-fill-mode: forwards;"
}

function lightTheme(){
    html.style.cssText = "animation: gettingLight; animation-duration: 0.3s; animation-fill-mode: forwards;";
    button.style.cssText = "background-image: url(\"sun.png\"); background-color: white; animation: gettingLight; animation-duration: 0.3s; animation-fill-mode: forwards;"
}

document.getElementById("btn").onclick = function(){
    if(clicks % 2 == 0){
        darkTheme();
    }
    else{
        lightTheme();
    }
    clicks += 1;
}