song = "";
song2 = "";

scoreLeft = 0;

leftX = 0;
leftY = 0;

rightX = 0;
rightY = 0;

function preload(){
   song = loadSound("mlp.mp3");
   song2 = loadSound("lion_guard.mp3.mp3");
}

function setup(){
   canvas = createCanvas(600, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
   image(video, 0, 0, 600, 500);
}

function modelLoaded(){
   console.log("PoseNet is Initialized");
}

function gotPoses(results) {
   if (results.length > 0.2) {
      console.log(results);

      leftX = results[0].pose.leftWrist.x;
      leftY = results[0].pose.leftWrist.y;
      console.log("left wrist x - " + leftX + " and y - " + leftY);

      rightX = results[0].pose.rightWrist.x;
      rightY = results[0].pose.rightWrist.y;
      console.log("right wrist x - " + rightX + " and y - " + rightY);
   }
}