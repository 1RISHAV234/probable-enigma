//global var
rightwrist = 0;
leftwrist = 0;
difference = 0;
function preload() {
    //
}
function setup() {
    canvas=createCanvas(300,300)
    video = createCapture(VIDEO);
    video.size(300,300)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Posenet is loaded")
}
function gotPoses(results) {
    if (results.length > 0) {  
        console.log(results);  
        rightwrist = results[0].pose.rightWrist.x; 
        leftwrist = results[0].pose.leftWrist.x;
        difference = floor(leftwrist-rightwrist);
        console.log("the font size of the text is : "+difference);
    }   
}
function draw() {
    background('#6C91C2'); 
    textSize(difference);
    text('Peter', 10, 45); 
    fill('#FFE787'); 
}