const pads = document.querySelectorAll(".pad")
const audioMap = {}

for(let i = 0; i < pads.length; i++){
   
    const audioPath = pads[i].getAttribute(`data-audio`);
    const audio = new Audio(audioPath);
    audioMap[pads[i].innerHTML.toLowerCase()] = audio;

    pads[i].addEventListener("click", function(){
        if(audio){
            playAudio(audio)
        }
        
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
 
 document.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    document.querySelector("#key").value = key;
    const audio = audioMap[key];
    if(audio){
        playAudio(audio)
        const pad = Array.from(pads).find(pad => pad.innerHTML.toLowerCase() === key);

    } 
 })

}
let sample_aux
function sendSample(){
    var key = document.querySelector("#key").value
    audioMap[key] = new audio(sample)
}



document.querySelector("#sample_file").addEventListener("change", function(event){
   sample = URL.createObjectURL(event.target.files[0])
   sample_aux = new Audio(sample);
   sendSample()
})

function playAudio(audio){
    audio.pause()
    audio.currentTime = 0;
    audio.play()
   
}