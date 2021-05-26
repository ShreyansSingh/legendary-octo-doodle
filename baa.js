function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,450);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('Pose Net is Initailized!');
}
function draw()
{
    background('rgb(0, 255, 200)');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}