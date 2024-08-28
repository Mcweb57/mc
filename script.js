var text = "";
let active = false;
var stopp = false;
var txtn = "";
var message = "";

function choice() {
    if (active) return;
    if (stopp) return;
    active = true;

    var index = 0;
    var intervalId = setInterval(function() {
        document.getElementById("inputWindow").value += text.charAt(index);
        index++;
        if(index == text.length) {
            clearInterval(intervalId);
            active = false;
        }
    }, 120);
}  

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function loading() {
    document.getElementById(txtn).innerHTML = ".";
    await delay(300);   
    document.getElementById(txtn).innerHTML = "..";
    await delay(300);   
    document.getElementById(txtn).innerHTML = "...";
    await delay(300);     
    document.getElementById(txtn).innerHTML = ".";
    await delay(300);   
    document.getElementById(txtn).innerHTML = "..";
    await delay(300);   
    document.getElementById(txtn).innerHTML = "...";
 
}

function a() {
    if (active) return;
    document.getElementById("inputWindow").value = text = "";
    text = "I choose the gun."
    choice();
}

function b() {
    if (active) return;
    document.getElementById("inputWindow").value = text = "";
    text = "I choose the food."
    choice();
}


async function sendA() {
    if(active) return;
    if (stopp) return;
    active = true

    document.getElementById("sendA").style.textDecoration = "none";
    document.getElementById("sendB").style.textDecoration = "none";
    document.getElementById("sendA").style.cursor = "default";
    document.getElementById("sendB").style.cursor = "default";

    document.getElementById("response").innerHTML ="...";
    document.getElementById("inputWindow").value = "";

    document.getElementById("response").style.marginTop = "15px";
    document.getElementById("response").style.marginBottom = "15px"; 
    document.getElementById("response").innerHTML ="C:\\User\\Player>I choose the gun.";
    
    txtn = "resp1";
    await delay(500);   
    loading();
    await delay(2100);   
    document.getElementById("resp1").innerHTML = "M: I hope you won't regret your choice.";
 
    txtn = "resp2";
    await delay(500);   
    loading();
    await delay(2100);  
    document.getElementById("resp2").innerHTML = "M: Everything has <u>consequences.<u/>";
    stopp = true
}

async function sendB() {
    if(active) return;
    if (stopp) return;
    active = true

    document.getElementById("sendA").style.textDecoration = "none";
    document.getElementById("sendB").style.textDecoration = "none";
    document.getElementById("sendA").style.cursor = "default";
    document.getElementById("sendB").style.cursor = "default";

    document.getElementById("response").innerHTML ="...";

    document.getElementById("response").style.marginTop = "15px";
    document.getElementById("response").style.marginBottom = "15px"; 

    document.getElementById("inputWindow").value = "";
    document.getElementById("response").innerHTML ="C:\\User\\Player>I choose the food.";
    
    txtn = "resp1";
    await delay(500);   
    loading();
    await delay(2100);   
    document.getElementById("resp1").innerHTML = "M: I hope you won't regret your choice.";
 
    txtn = "resp2";
    await delay(500);   
    loading();
    await delay(2100);  
    document.getElementById("resp2").innerHTML = "M: Everything has <u>consequences.</u>";
    stopp = true
}


async function welcome() {
    txtn = "choices1";
    document.getElementById(txtn).hidden = true;

    txtn = "txt1";
    document.getElementById(txtn).innerHTML = "";
    await delay(500);  
    loading();
    await delay(2100);  
    document.getElementById(txtn).innerHTML = "M: Welcome to the game";

    txtn = "txt2";
    document.getElementById(txtn).innerHTML = "";
    await delay(500);  
    loading();
    await delay(2100);  
    document.getElementById(txtn).innerHTML = "M: Choose wisely.";

    txtn = "txt3";
    document.getElementById(txtn).hidden = true;
    await delay(500);  
    document.getElementById(txtn).hidden = false;
    loading();
    await delay(2100);   

    document.getElementById(txtn).hidden = true;
    txtn = "choices1";
    document.getElementById(txtn).hidden = false;
}

welcome();