prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,height:300,image_format:"jpeg",jpeg_qualiity:100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id ='capturedImage' src =" + data_uri + "'>";
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8CMsETvsF/model.json",modelLoaded);

function model(){
    console.log("Model Loaded")
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "The first prediction is " + prediction1;
    speakData2 = "and the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}