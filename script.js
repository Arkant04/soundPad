const pads = document.querySelectorAll(".pad")
const audioMap = {}

for(let i = 0; i < pads.length; i++){
   
    const audioPath = pads[i].getAttribute(`data-audio`);
    const audio = new Audio(audioPath);
    audioMap[pads[i].innerHTML.toLowerCase()] = audio;

    pads[i].addEventListener("click", function(){
        console.log("hola " + pads[i].innerHTML);
        const key = pads[i].innerHTML.toLowerCase();
        pads[i].style.background = "red"
        setTimeout(function(){
            pads[i].style.background = "url(https://31.media.tumblr.com/tumblr_mdghlnkX3f1qdtfd6o1_400.gif)"
            pads[i].style.backgroundSize = "cover"
            pads[i].style.backgroundColor = "rgba(255, 255, 255, 0.336)"
            pads[i].style.boxShadow = "0px 5px 0px greenyellow"
        }, 100)
    })

}

function playAudio(audio){
    audio.pause()
    audio.currentTime =0;
    audio.play
}