noseX = 0;
noseY = 0;

function preload(){
    img = loadImage()
}


function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
 image(img, noseX, noseY, 30, 30);
} 

function modelLoaded() {

}

function gotPoses() {
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y-25;

    }
}