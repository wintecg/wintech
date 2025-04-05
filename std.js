
// script.js
const startRecordingButton = document.getElementById('start-recording');
const stopRecordingButton = document.getElementById('stop-recording');
const recordedAudio = document.getElementById('recorded-audio');
const audioVisualizer = document.getElementById('audio-visualizer');
const volumeControl = document.getElementById('volume');
const panControl = document.getElementById('pan');
const reverbControl = 

document.getElementById('reverb');

let mediaRecorder;
let audioChunks = [];
let audioContext;
let analyser;
let canvas;
let canvasCtx;

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = event => {
            

audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            recordedAudio.src = audioUrl;
            audioChunks = [];
        };

        startRecordingButton.addEventListener('click', () => {
            mediaRecorder.start();
            

startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;
            visualizeAudio(stream);
        });

        stopRecordingButton.addEventListener('click', () => {
            mediaRecorder.stop();
            startRecordingButton.disabled = false;
            stopRecordingButton.disabled = true;

        });

        volumeControl.addEventListener('input', () => {
          recordedAudio.volume = volumeControl.value;
        });
        panControl.addEventListener('input', () => {
            //Implement Pan Effect Later
        });
        reverbControl.addEventListener('input',()=>{
            //Implement Reverb Effect Later

        });

    })
    .catch(error => {
        console.error('Error accessing microphone:', error);
    });

function visualizeAudio(stream) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    canvas = document.createElement('canvas');
    canvas.width = audioVisualizer.offsetWidth;
    canvas.height = audioVisualizer.offsetHeight;
    audioVisualizer.innerHTML = '';
    audioVisualizer.appendChild(canvas);
    canvasCtx = canvas.getContext('2d');


    function draw() {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
        canvasCtx.beginPath();
        const sliceWidth = canvas.width * 1.0 / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength; i+

+) {
            const v = dataArray[i] / 128.0;
            const y = canvas.height - (v * canvas.height / 2);
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }
    draw();
}
