
window.addEventListener("keydown", function(event) {
    if(event.code === "KeyW" || event.code === "KeyE" || event.code === "KeyT" || event.code === "KeyY" || event.code === "KeyU" || event.code === "KeyA" || event.code === "KeyS" || event.code === "KeyD" || event.code === "KeyF" || event.code === "KeyG" || event.code === "KeyH" || event.code === "KeyJ") {
        let audio = new Audio(`/sounds/${event.key}.mp3`);
        audio.play();
    }
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    console.log(`The'${event.key}' key is pressed' | code='${event.code}'`);
}, true);
