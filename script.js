/*document.addEventListener("keypress",function() {
    console.log("pressed");d
});*/
/*const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}*/
window.addEventListener("keydown", function(event) {
    let audio = new Audio(`/sounds/${event.key}.mp3`);
    audio.play();
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    console.log(`The'${event.key}' key is pressed`);


    /*if(`${event.key}`=="a") {
        let audioObj = new Audio("/sounds/A.mp3");
        audioObj.play();
    }
    if(`${event.key}`=="s") {
        let audioObj = new Audio("/sounds/S.mp3");
        audioObj.play();
    }
    if(`${event.key}`=="d") {
        let audioObj = new Audio(`/sounds/${event.key}.mp3`);
        audioObj.play();
    }
    if(`${event.key}`=="f") {
        let audioObj = new Audio("/sounds/F.mp3");
        audioObj.play();
    }
    if(`${event.key}`=="g") {
        let audioObj = new Audio("/sounds/G.mp3");
        audioObj.play();
    }
    if(`${event.key}`=="h") {
        let audioObj = new Audio("/sounds/H.mp3");
        audioObj.play();
    }
    if(`${event.key}`=="j") {
        let audioObj = new Audio("/sounds/J.mp3");
        audioObj.play();
    }*/
    /*document.getElementById("output").appendChild(p);*/
}, true);
/*window.addEventListener("keydown", function(event) {
    document.getElementById(`${event.key}`).style.backgroundColor = "red";

}, true);
window.addEventListener("keyup", function(event) {
    document.getElementById(`${event.key}`).style.backgroundColor = "white";
}, true);*/