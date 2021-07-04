mustache_X = 0;
mustache_Y = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        mustache_X = results[0].pose.nose.x - 20;
        mustache_Y = results[0].pose.nose.y - 16;
        
        console.log("mustache x =" + mustache_X);
        console.log("mustache y =" + mustache_Y);
    }}

function modelLoaded() {
    console.log("Posenet is Initialized");
}

function draw() {
    image (video, 0, 0, 300, 300);
    image(mustache, mustache_X, mustache_Y, 50, 50);
}

function take_snapshot() {
    save('filter.png');
}