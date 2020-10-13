

const myVideo= document.createElement('video');

let myVideoStream 
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true 
}).then(stream => {
    myVideoStream = stream; 
} )

const addVideoStream =(video, stream) => {
    video.srcObject = stream;   // this part is confusing 
    video.addEventListener('loadedmetadata', () => {
        video.play();
    }) 

}