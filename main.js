//https://teachablemachine.withgoogle.com/models/1Te_xTuZB/

prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1Te_xTuZB/model.json',modelLoaded)

    function take_snapshot() {
         Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        }
    )
}


function speak(){
    synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction1;
    speak_data_2="and the second prediction is "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function modelLoaded(){
   console.log("Model is loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,got_results);
}

function got_results(error,results){
if(error){
    console.error(error)
}
else{
console.log(results)
prediction1=results[0].label;
prediction2=results[1].label;
document.getElementById("result_emotion1").innerHTML=prediction1;
document.getElementById("result_emotion2").innerHTML=prediction2;
if(prediction1=="Happy"){
    document.getElementById("update_emoji1").innerHTML="&#128522";
}
if(prediction1=="Angry"){
    document.getElementById("update_emoji1").innerHTML="&#128544";
}
if(prediction1=="Sad"){
    document.getElementById("update_emoji1").innerHTML="&#128543";
}
if(prediction2=="Happy"){
    document.getElementById("update_emoji2").innerHTML="&#128522";
}
if(prediction2=="Angry"){
    document.getElementById("update_emoji2").innerHTML="&#128544";
}
if(prediction2=="Sad"){
    document.getElementById("update_emoji2").innerHTML="&#128543";
}
speak();
}
}