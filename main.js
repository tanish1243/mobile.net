Webcam.set({
    width:310,
    height:300,
    image_format:'jpg',
    jpg_quality:90,
    constraints:{
    facingMode:"environment"
    }
    
});
camera= document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("capturedimage").innerHTML= '<img id="captured_image" src="'+ data_uri + '">';
    });
}
console.log("ml5 version:" , ml5.version);

classifier= ml5.imageClassifier("MobileNet" , modelloaded)
function modelloaded(){
    console.log("model loaded");
}
function check(){
    var image= document.getElementById("captured_image");
    classifier.classify(image , gotResults);

}
function gotResults(error , results){
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("objectname").innerHTML= results[0].label;
    }
}