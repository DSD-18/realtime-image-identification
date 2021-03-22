function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wbyHW4awe/model.json",modelloaded);

}

function draw(){
    image(video,0,0,300,250);
    classifier.classify(video,gotResult);   
}
function modelloaded(){
    console.log("modelloaded");
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Result_object").innerHTML=results[0].label;
        document.getElementById("Result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}