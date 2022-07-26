//https://teachablemachine.withgoogle.com/models/1Te_xTuZB/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera)


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