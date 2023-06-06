var song="";
leftwristx=0;
leftwristy=0
rightwristx=0
rightwristy=0
function preload(){
    song=loadSound("music.mp3");

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes)
}
function modelloaded(){
console.log("model has been initialized")
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("leftwristx="+leftwristx)
    console.log("leftwristy="+leftwristy)
    console.log("rightwristx="+rightwristx)
    console.log("rightwristy="+rightwristy)

}
}

function draw(){
    image(video,0,0,600,500);

}

function play(){
    song.play();
    song.setVolume(0.2);
    song.rate(2.5);
}
